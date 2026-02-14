interface City {
  n: string;  // name
  c: string;  // country code
  la: number; // latitude
  ln: number; // longitude
  tz: string; // IANA timezone
  p: number;  // population
}

let citiesCache: City[] | null = null;
let loadingPromise: Promise<City[]> | null = null;

async function loadCities(): Promise<City[]> {
  if (citiesCache) return citiesCache;
  if (loadingPromise) return loadingPromise;
  loadingPromise = fetch(import.meta.env.BASE_URL + 'data/cities15000.json')
    .then(r => r.json() as Promise<City[]>)
    .then(cities => {
      citiesCache = cities;
      return cities;
    });
  return loadingPromise;
}

export function createCitySearch(
  onSelect: (lat: number, lng: number, tz: string, cityName: string) => void
): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = `
    position: absolute;
    top: 60px; left: 12px;
    pointer-events: auto;
    width: 260px;
  `;

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search city...';
  input.dataset.testid = 'city-search';
  input.style.cssText = `
    width: 100%;
    background: rgba(0,0,0,0.75);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    color: #fff;
    padding: 8px 12px;
    font-size: 14px;
    backdrop-filter: blur(8px);
  `;

  const dropdown = document.createElement('div');
  dropdown.style.cssText = `
    background: rgba(0,0,0,0.9);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    display: none;
  `;

  let debounceTimer: ReturnType<typeof setTimeout>;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const query = input.value.trim().toLowerCase();
      if (query.length < 2) {
        dropdown.style.display = 'none';
        return;
      }
      const cities = await loadCities();
      const matches = cities
        .filter(c => c.n.toLowerCase().startsWith(query))
        .sort((a, b) => b.p - a.p)
        .slice(0, 10);

      dropdown.innerHTML = '';
      if (matches.length === 0) {
        dropdown.style.display = 'none';
        return;
      }

      for (const city of matches) {
        const item = document.createElement('div');
        item.dataset.testid = 'city-suggestion';
        item.style.cssText = `
          padding: 8px 12px;
          cursor: pointer;
          font-size: 13px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        `;
        item.textContent = `${city.n}, ${city.c}`;
        item.addEventListener('mouseenter', () => {
          item.style.background = 'rgba(255,255,255,0.1)';
        });
        item.addEventListener('mouseleave', () => {
          item.style.background = 'transparent';
        });
        item.addEventListener('click', () => {
          input.value = `${city.n}, ${city.c}`;
          dropdown.style.display = 'none';
          onSelect(city.la, city.ln, city.tz, city.n);
        });
        dropdown.appendChild(item);
      }
      dropdown.style.display = 'block';
    }, 200);
  });

  container.appendChild(input);
  container.appendChild(dropdown);
  return container;
}
