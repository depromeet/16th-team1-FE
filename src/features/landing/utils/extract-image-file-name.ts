export function extractImageFilename(url: string) {
  const keyword = 'images/';
  const idx = url.indexOf(keyword);

  if (idx === -1) return null;

  const remainder = url.substring(idx + keyword.length);
  const filename = remainder.split('?')[0];

  return filename;
}
