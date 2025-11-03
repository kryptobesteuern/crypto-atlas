/**
 * Gets the favicon URL for a given website using Google's favicon service
 */
export function getFaviconUrl(websiteUrl: string): string | null {
  try {
    const origin = new URL(websiteUrl).origin;
    return `https://www.google.com/s2/favicons?domain=${origin}&sz=32`;
  } catch {
    return null;
  }
}
