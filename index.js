import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { getDimensions } from './lib/jpeg/dimensions.js'

/** main */

const assets = path.join(process.cwd(), 'assets')
const files = await fs.readdir(assets)

for (const file of files) {
  const fd = await fs.open(path.join(assets, file), 'r')

  const dimensions = await getDimensions(fd)
  console.log(`${file}: ${dimensions.width}x${dimensions.height}`)

  await fd.close()
}
