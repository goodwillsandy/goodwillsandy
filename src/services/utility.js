export function getWindowWidth() {
  return typeof window !== 'undefined' ? window.innerWidth : undefined;
}

export function isDesktopWindow() {
  return getWindowWidth() >= 769;
}