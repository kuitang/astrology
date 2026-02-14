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
    pointer-events: auto;
    position: relative;
  `;

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = '\u{1F50D} Search city...';
  input.dataset.testid = 'city-search';
  input.style.cssText = `
    width: 170px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 6px;
    color: #fff;
    padding: 6px 10px;
    font-size: 13px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
  `;
  input.addEventListener('focus', () => {
    input.style.borderColor = 'rgba(68, 136, 255, 0.6)';
  });
  input.addEventListener('blur', () => {
    setTimeout(() => {
      input.style.borderColor = 'rgba(255,255,255,0.3)';
      dropdown.style.display = 'none';
    }, 200);
  });

  const dropdown = document.createElement('div');
  dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 20, 0.95);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 0 0 6px 6px;
    max-height: 200px;
    overflow-y: auto;
    display: none;
    backdrop-filter: blur(12px);
    z-index: 100;
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
          padding: 6px 10px;
          cursor: pointer;
          font-size: 13px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.15s;
        `;
        item.textContent = `${city.n}, ${city.c}`;
        item.addEventListener('mouseenter', () => {
          item.style.background = 'rgba(68, 136, 255, 0.15)';
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
