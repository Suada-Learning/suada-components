const fs = require('fs')
const path = require('path')

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

// Create or copy index files if they don't exist
const checkAndCreateIndexFile = (dir, content) => {
  const indexPath = path.join('dist', dir, 'index.js')
  const indexEsmPath = path.join('dist', dir, 'index.esm.js')
  const dtsPath = path.join('dist', dir, 'index.d.ts')

  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, content)
    console.log(`Created ${indexPath}`)
  }

  if (!fs.existsSync(indexEsmPath)) {
    fs.writeFileSync(
      indexEsmPath,
      content.replace('exports.', 'export ').replace('= require(', '= import('),
    )
    console.log(`Created ${indexEsmPath}`)
  }

  // Check if type definition exists, if not create a placeholder
  if (!fs.existsSync(dtsPath)) {
    fs.writeFileSync(dtsPath, '// Generated types\nexport * from "../src/components";\n')
    console.log(`Created placeholder ${dtsPath}`)
  }
}

checkAndCreateIndexFile(
  'components',
  "'use strict';\nObject.defineProperty(exports, '__esModule', { value: true });\nvar index = require('../src/components');\nObject.keys(index).forEach(function (key) {\n  exports[key] = index[key];\n});\n",
)

checkAndCreateIndexFile(
  'icons',
  "'use strict';\nObject.defineProperty(exports, '__esModule', { value: true });\nvar index = require('../src/icons');\nObject.keys(index).forEach(function (key) {\n  exports[key] = index[key];\n});\n",
)

console.log('Post-build file creation completed!')
