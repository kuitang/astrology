export function isMobile(): boolean {
  return window.innerWidth < 768;
}

export function getDevicePixelRatio(): number {
  // Cap at 2 on mobile for performance
  const dpr = window.devicePixelRatio || 1;
  return isMobile() ? Math.min(dpr, 2) : dpr;
}
