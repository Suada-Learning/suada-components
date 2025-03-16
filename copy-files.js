import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ensure directories exist
const dirs = ['dist/components', 'dist/icons']
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
})

// Create components/package.json
const componentsPackage = {
  name: 'suada-components/components',
  main: 'index.js',
  module: 'index.esm.js',
  types: 'index.d.ts',
  sideEffects: false,
}

fs.writeFileSync(
  path.join('dist/components', 'package.json'),
  JSON.stringify(componentsPackage, null, 2),
)

// Create icons/package.json
const iconsPackage = {
  name: 'suada-components/icons',
  main: 'index.js',
  module: 'index.esm.js',
  types: 'index.d.ts',
  sideEffects: false,
}

fs.writeFileSync(path.join('dist/icons', 'package.json'), JSON.stringify(iconsPackage, null, 2))

// Create root-level component files to help with imports
fs.writeFileSync(
  'components.d.ts',
  "// Root level declaration file to help TypeScript find the correct types\nexport * from './dist/components/index';\n",
)

fs.writeFileSync(
  'icons.d.ts',
  "// Root level declaration file to help TypeScript find the correct types\nexport * from './dist/icons/index';\n",
)

console.log('Post-build file creation completed!')
