#!/usr/bin/env python3
"""
Generate constellation data from Stellarium constellationship.fab and HYG star catalog.

Downloads (if not cached) and processes:
  - constellationship.fab: star-to-star connection pairs using HIP IDs
  - hygdata_v41.csv: HYG database with RA/Dec/distance/magnitude

Outputs TypeScript file: src/scene/constellation-data.generated.ts
"""

import csv
import math
import os
import sys
import json

# --- Configuration ---

CONSTELLATIONSHIP_PATH = "/tmp/constellationship.fab"
HYG_PATH = "/tmp/hygdata_v41.csv"
OUTPUT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "scene", "constellation-data.generated.ts"
)

# The 13 zodiac constellations (12 traditional + Ophiuchus)
ZODIAC_ABBRS = {"Ari", "Tau", "Gem", "Cnc", "Leo", "Vir", "Lib", "Sco", "Oph", "Sgr", "Cap", "Aqr", "Psc"}

# Full names, conventional sign, and conventional 30-degree range
CONSTELLATION_INFO = {
    "Ari": ("Aries",       "Aries",       (0, 30)),
    "Tau": ("Taurus",      "Taurus",      (30, 60)),
    "Gem": ("Gemini",      "Gemini",      (60, 90)),
    "Cnc": ("Cancer",      "Cancer",      (90, 120)),
    "Leo": ("Leo",         "Leo",         (120, 150)),
    "Vir": ("Virgo",       "Virgo",       (150, 180)),
    "Lib": ("Libra",       "Libra",       (180, 210)),
    "Sco": ("Scorpius",    "Scorpio",     (210, 240)),
    "Oph": ("Ophiuchus",   "Sagittarius", (240, 270)),
    "Sgr": ("Sagittarius", "Sagittarius", (240, 270)),
    "Cap": ("Capricornus", "Capricorn",   (270, 300)),
    "Aqr": ("Aquarius",    "Aquarius",    (300, 330)),
    "Psc": ("Pisces",      "Pisces",      (330, 360)),
}

# Ecliptic obliquity
OBLIQUITY_DEG = 23.4393
OBLIQUITY_RAD = math.radians(OBLIQUITY_DEG)

# Parsec to light-year conversion
PARSEC_TO_LY = 3.26156

# Desired output order (ecliptic order)
OUTPUT_ORDER = ["Ari", "Tau", "Gem", "Cnc", "Leo", "Vir", "Lib", "Sco", "Oph", "Sgr", "Cap", "Aqr", "Psc"]


def parse_constellationship(path):
    """
    Parse constellationship.fab file.
    Format: <abbr> <num_segments> <hip1> <hip2> <hip3> <hip4> ...
    Each pair of HIP IDs after num_segments is a line segment.
    Returns dict: abbr -> list of (hip1, hip2) pairs
    """
    constellations = {}
    with open(path, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            parts = line.split()
            abbr = parts[0]
            num_segments = int(parts[1])
            hip_ids = [int(x) for x in parts[2:]]

            segments = []
            for i in range(0, len(hip_ids), 2):
                if i + 1 < len(hip_ids):
                    segments.append((hip_ids[i], hip_ids[i + 1]))

            if len(segments) != num_segments:
                print(f"Warning: {abbr} expected {num_segments} segments, got {len(segments)}", file=sys.stderr)

            constellations[abbr] = segments

    return constellations


def load_hyg_catalog(path, needed_hips):
    """
    Load HYG catalog, returning dict: hip_id -> {ra, dec, dist, mag}
    Only loads stars that are in needed_hips set.
    RA is in hours (0-24), Dec in degrees, dist in parsecs, mag is apparent magnitude.
    """
    catalog = {}
    with open(path, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            hip_str = row.get("hip", "").strip()
            if not hip_str:
                continue
            try:
                hip = int(hip_str)
            except ValueError:
                continue
            if hip not in needed_hips:
                continue

            try:
                ra = float(row["ra"])
                dec = float(row["dec"])
                dist_str = row["dist"].strip()
                dist = float(dist_str) if dist_str else 0.0
                mag_str = row["mag"].strip()
                mag = float(mag_str) if mag_str else 99.0
            except (ValueError, KeyError):
                continue

            catalog[hip] = {
                "ra": ra,
                "dec": dec,
                "dist": dist,
                "mag": mag,
            }

    return catalog


def ra_dec_to_ecliptic(ra_hours, dec_deg):
    """
    Convert equatorial RA/Dec to ecliptic longitude/latitude.
    RA in hours, Dec in degrees.
    Returns (lambda_deg, beta_deg) in degrees.

    Formulas:
      lambda = atan2(sin(alpha)*cos(eps) + tan(delta)*sin(eps), cos(alpha))
      beta = asin(sin(delta)*cos(eps) - cos(delta)*sin(eps)*sin(alpha))
    """
    alpha = math.radians(ra_hours * 15.0)  # hours -> degrees -> radians
    delta = math.radians(dec_deg)
    eps = OBLIQUITY_RAD

    sin_a = math.sin(alpha)
    cos_a = math.cos(alpha)
    sin_d = math.sin(delta)
    cos_d = math.cos(delta)
    sin_e = math.sin(eps)
    cos_e = math.cos(eps)

    # Ecliptic longitude
    lam = math.atan2(sin_a * cos_e + math.tan(delta) * sin_e, cos_a)
    lam_deg = math.degrees(lam) % 360.0

    # Ecliptic latitude
    beta = math.asin(sin_d * cos_e - cos_d * sin_e * sin_a)
    beta_deg = math.degrees(beta)

    return lam_deg, beta_deg


def compute_extent(ecliptic_lons, abbr):
    """
    Compute [min_lon, max_lon] extent.
    Handle Pisces wrapping around 0/360.
    """
    if not ecliptic_lons:
        return [0, 0]

    lons = sorted(ecliptic_lons)

    # Check if the constellation wraps around 0/360
    # This happens when the gap between consecutive sorted longitudes is very large
    # (i.e., some stars are near 360 and some near 0)
    if abbr == "Psc":
        # For Pisces, we know it wraps. Find the largest gap.
        gaps = []
        for i in range(len(lons) - 1):
            gaps.append(lons[i + 1] - lons[i])
        gaps.append((lons[0] + 360) - lons[-1])  # wrap-around gap

        max_gap_idx = gaps.index(max(gaps))

        if max_gap_idx == len(lons) - 1:
            # Largest gap is the wrap-around gap: stars near 360 and near 0
            # min is the first star after the gap (going clockwise)
            # max is the last star before the gap
            # But we want to express this as [high, low+360] conceptually
            # Actually: extent is [start_after_gap, end_before_gap]
            # where start_after_gap is the first lon after the biggest gap
            # For Pisces wrapping: extent = [min_of_high_group, max_of_low_group]
            # but since it wraps, we store [min_lon_above_gap, max_lon_below_gap]
            # Following the existing convention: extent: [352, 28]
            # So: start = smallest lon > gap_start, expressed as is
            # Actually: the existing code uses [352, 28] meaning start=352, end=28 (wrapping)
            return [round(lons[-1], 1) if lons[-1] > 180 else round(lons[0], 1),
                    round(lons[0], 1) if lons[0] < 180 else round(lons[-1], 1)]
        else:
            # The gap is in the middle, not wrap-around
            start = lons[max_gap_idx + 1]
            end = lons[max_gap_idx]
            return [round(start, 1), round(end, 1)]

    # For Pisces specifically, let's handle it more carefully
    # For all others, just min/max
    return [round(min(lons), 1), round(max(lons), 1)]


def compute_extent_v2(ecliptic_lons, abbr):
    """
    Compute [min_lon, max_lon] extent, handling wrapping for Pisces.
    For Pisces (which wraps 0/360), we find the largest angular gap and
    define extent as [start_after_gap, end_before_gap] going the short way around.
    """
    if not ecliptic_lons:
        return [0, 0]

    lons = sorted(ecliptic_lons)

    if abbr == "Psc":
        # Find the largest gap between consecutive stars (including wrap)
        best_gap = 0
        best_idx = 0
        n = len(lons)
        for i in range(n):
            next_lon = lons[(i + 1) % n]
            gap = (next_lon - lons[i]) % 360
            if gap > best_gap:
                best_gap = gap
                best_idx = i

        # The extent starts just after the gap and ends just before it
        start = lons[(best_idx + 1) % n]
        end = lons[best_idx]
        return [round(start, 1), round(end, 1)]

    return [round(min(lons), 1), round(max(lons), 1)]


def generate_typescript(constellations_data):
    """Generate the TypeScript output file content."""
    lines = []
    lines.append("// AUTO-GENERATED by scripts/generate-constellations.py")
    lines.append("// Source: Stellarium constellationship.fab + HYG Star Catalog v4.1")
    lines.append("// Do not edit manually.")
    lines.append("")
    lines.append("import type { ConstellationData } from './constellations.js';")
    lines.append("")
    lines.append("export const ZODIAC_CONSTELLATIONS_GENERATED: ConstellationData[] = [")

    for i, data in enumerate(constellations_data):
        lines.append("  {")
        lines.append(f"    name: '{data['name']}', abbr: '{data['abbr']}',")
        lines.append(f"    extent: [{data['extent'][0]}, {data['extent'][1]}], distanceLy: {data['distanceLy']},")
        lines.append(f"    conventionalSign: '{data['conventionalSign']}', conventionalRange: [{data['conventionalRange'][0]}, {data['conventionalRange'][1]}],")

        # Stars array
        stars_str = ", ".join(f"[{s[0]}, {s[1]}]" for s in data['stars'])
        lines.append(f"    stars: [{stars_str}],")

        # Lines array
        lines_str = ", ".join(f"[{l[0]}, {l[1]}]" for l in data['lines'])
        lines.append(f"    lines: [{lines_str}],")

        lines.append("  },")

    lines.append("];")
    lines.append("")

    return "\n".join(lines)


def main():
    # Check input files exist
    for path, desc in [(CONSTELLATIONSHIP_PATH, "constellationship.fab"), (HYG_PATH, "hygdata_v41.csv")]:
        if not os.path.exists(path):
            print(f"Error: {desc} not found at {path}", file=sys.stderr)
            print(f"Please download it first.", file=sys.stderr)
            sys.exit(1)

    # Step 1: Parse constellation line data
    print("Parsing constellationship.fab...")
    all_constellations = parse_constellationship(CONSTELLATIONSHIP_PATH)

    # Filter to zodiac only
    zodiac_constellations = {k: v for k, v in all_constellations.items() if k in ZODIAC_ABBRS}
    print(f"Found {len(zodiac_constellations)} zodiac constellations: {sorted(zodiac_constellations.keys())}")

    missing = ZODIAC_ABBRS - set(zodiac_constellations.keys())
    if missing:
        print(f"Warning: Missing constellations: {missing}", file=sys.stderr)

    # Collect all needed HIP IDs
    needed_hips = set()
    for abbr, segments in zodiac_constellations.items():
        for h1, h2 in segments:
            needed_hips.add(h1)
            needed_hips.add(h2)
    print(f"Need {len(needed_hips)} unique HIP star IDs")

    # Step 2: Load HYG catalog for needed stars
    print("Loading HYG catalog...")
    catalog = load_hyg_catalog(HYG_PATH, needed_hips)
    print(f"Found {len(catalog)} stars in HYG catalog")

    found_hips = set(catalog.keys())
    missing_hips = needed_hips - found_hips
    if missing_hips:
        print(f"Warning: {len(missing_hips)} HIP IDs not found in catalog: {sorted(missing_hips)[:10]}...", file=sys.stderr)

    # Step 3: Process each constellation
    results = []
    for abbr in OUTPUT_ORDER:
        if abbr not in zodiac_constellations:
            print(f"Skipping {abbr}: not in constellationship data", file=sys.stderr)
            continue

        segments = zodiac_constellations[abbr]
        name, conv_sign, conv_range = CONSTELLATION_INFO[abbr]

        # Collect unique HIP IDs (preserving order of first appearance)
        hip_order = []
        hip_set = set()
        for h1, h2 in segments:
            for h in (h1, h2):
                if h not in hip_set:
                    hip_order.append(h)
                    hip_set.add(h)

        # Convert each star to ecliptic coords
        stars_ecliptic = []
        hip_to_index = {}
        distances = []
        skipped_hips = set()

        for hip in hip_order:
            if hip not in catalog:
                skipped_hips.add(hip)
                continue
            star = catalog[hip]
            lon, lat = ra_dec_to_ecliptic(star["ra"], star["dec"])
            hip_to_index[hip] = len(stars_ecliptic)
            stars_ecliptic.append((round(lon, 2), round(lat, 2)))
            if star["dist"] > 0:
                distances.append(star["dist"] * PARSEC_TO_LY)

        if skipped_hips:
            print(f"  {abbr}: skipped {len(skipped_hips)} stars not in catalog", file=sys.stderr)

        # Build line indices
        line_indices = []
        for h1, h2 in segments:
            if h1 in hip_to_index and h2 in hip_to_index:
                line_indices.append((hip_to_index[h1], hip_to_index[h2]))

        # Compute extent
        ecliptic_lons = [s[0] for s in stars_ecliptic]
        extent = compute_extent_v2(ecliptic_lons, abbr)

        # Mean distance (use median to be robust against catalog outliers)
        if distances:
            sorted_dists = sorted(distances)
            n = len(sorted_dists)
            if n % 2 == 1:
                median_dist = sorted_dists[n // 2]
            else:
                median_dist = (sorted_dists[n // 2 - 1] + sorted_dists[n // 2]) / 2
            mean_dist = round(median_dist)
        else:
            mean_dist = 0

        print(f"  {abbr} ({name}): {len(stars_ecliptic)} stars, {len(line_indices)} lines, "
              f"extent=[{extent[0]}, {extent[1]}], dist={mean_dist} ly")

        results.append({
            "name": name,
            "abbr": abbr,
            "stars": stars_ecliptic,
            "lines": line_indices,
            "extent": extent,
            "conventionalSign": conv_sign,
            "distanceLy": mean_dist,
            "conventionalRange": list(conv_range),
        })

    # Step 4: Generate TypeScript
    print(f"\nGenerating TypeScript at {OUTPUT_PATH}...")
    ts_content = generate_typescript(results)

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        f.write(ts_content)

    print(f"Done! Generated data for {len(results)} constellations.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
