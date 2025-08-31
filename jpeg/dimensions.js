import { Segments } from './segments.js'

const isSOFMarker = (marker) => {
  return (marker >= 0xFFC0 && marker <= 0xFFC3) ||
    (marker >= 0xFFC5 && marker <= 0xFFC7) ||
    (marker >= 0xFFC9 && marker <= 0xFFCB) ||
    (marker >= 0xFFCD && marker <= 0xFFCF)
}

const getDimensions = async (fd) => {
  const segments = Segments(fd)
  while (await segments.hasNext()) {
    const segment = await segments.getNext()
    if (isSOFMarker(segment.hex)) {
      const payload = await segments.getPayload()
      const height = payload.readUInt16BE(1)
      const width = payload.readUInt16BE(3)
      return { width, height }
    }
  }
}

export { getDimensions }
