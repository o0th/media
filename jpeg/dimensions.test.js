import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { getDimensions } from './dimensions.js'

const files = {
  'donkie.jpeg': { width: 1536, height: 2048 },
}

describe('getDimensions', () => {
  it('donkie.jpeg', async () => {
    const donkieFile = path.join(process.cwd(), 'assets', 'donkie.jpeg')
    const donkieDimension = { width: 1536, height: 2048 }

    const fd = await fs.open(donkieFile, 'r')
    const dimensions = await getDimensions(fd)
    assert.deepStrictEqual(dimensions, donkieDimension)
    await fd.close()
  })
})
