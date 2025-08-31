import { markers } from './markers.js'

const Segments = (fd) => {
  let currentPosition = 0
  let nextPosition = 0

  const hasNext = async () => {
    const buffer = Buffer.alloc(2)
    await fd.read(buffer, 0, 2, nextPosition)
    return markers.has(buffer.readUInt16BE(0))
  }

  const getNext = async () => {
    currentPosition = nextPosition

    let buffer = Buffer.alloc(2)
    await fd.read(buffer, 0, 2, currentPosition)

    if (!markers.has(buffer.readUInt16BE(0))) {
      return undefined
    }

    const marker = markers.get(buffer.readUInt16BE(0))

    if (marker.length === 0) {
      nextPosition = currentPosition + 2
      return marker
    }

    buffer = Buffer.alloc(2)
    await fd.read(buffer, 0, 2, currentPosition + 2)
    const length = buffer.readUInt16BE(0)
    nextPosition = currentPosition + length + 2
    return marker
  }

  const getPayload = async () => {
    const size = nextPosition - currentPosition - 4
    const buffer = Buffer.alloc(size)
    await fd.read(buffer, 0, size, currentPosition + 4)
    return buffer
  }

  return { hasNext, getNext, getPayload }
}

export { Segments }
