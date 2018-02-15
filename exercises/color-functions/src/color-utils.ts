//TODO: Implement hexToRgb
export const hexToRgb = (hex: string): {r: number, g: number, b:number} => {
  if (hex.length === 3) {
    let hex6 = ''
    for (let hexCh of hex) {
      hex6 += (hexCh + hexCh)
    }
    return hexToRgb(hex6)
  }
  const [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16))
  return { r, g, b }
}

//TODO: Implement rgbToHex
export const rgbToHex = (r: number, g: number, b: number): string => {
  return [r, g, b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => hexCh.length === 1 ? `${hexCh}${hexCh}` : hexCh)
    .join('')
}
