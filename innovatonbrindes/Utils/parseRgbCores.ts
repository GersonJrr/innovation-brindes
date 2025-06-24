export type CorHex = {
  name: string;
  hex: string;
};

export function parseRgbCores(rgbString: string): CorHex[] {
  if (!rgbString) return [];

  return rgbString.split(';').filter(Boolean).map(item => {
    const [name, hex] = item.split(':').map(str => str.trim());
    return { name, hex };
  });
}
