# Domain Checker Script

Checks domain availability and pricing for astrology project domain names.

## Setup

1. **Get a free API key** (100 queries):
   ```bash
   # Visit https://domain-availability.whoisxmlapi.com/
   # Sign up and get your API key
   export WHOISXML_API_KEY="your-key-here"
   ```

2. **Optional**: Get API Ninjas key for fallback:
   ```bash
   # Visit https://api-ninjas.com/
   export API_NINJAS_KEY="your-key-here"
   ```

## Usage

```bash
# Make script executable
chmod +x scripts/check-domains.ts

# Run with tsx (TypeScript executor)
npx tsx scripts/check-domains.ts

# Or with environment variable inline
WHOISXML_API_KEY="your-key" npx tsx scripts/check-domains.ts
```

## What it does

- Checks 30+ domain combinations across .com, .io, .app TLDs
- Ranks by quality (1-10) based on memorability and relevance
- Fetches pricing information when available
- Sorts results: available first, then by quality, then by price

## Output

```
✅ AVAILABLE DOMAINS:
  cosmic-orrery.io              | Quality: 10/10 | $29.99/yr
    → Perfect match, unique, memorable

❌ UNAVAILABLE DOMAINS:
  astrology3d.com               | Quality: 9/10
```
