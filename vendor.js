const fs = require('fs');
const path = require('path');

function copyFile(filePath) {
  console.log('copying ' + filePath);
  fs.copyFileSync(
    filePath,
    path.join('./vendor', path.basename(filePath))
  );
}

function vendor() {
  for (let [package, files] of Object.entries(VENDOR_FILES)) {
    files.map(f => path.join('node_modules',package,f)).forEach(copyFile);
  }
}

const VENDOR_FILES = {
  'photon-icons': [
    'icons/desktop/refresh-16.svg'
  ],
  'photon-colors': [
    'photon-colors.css'
  ],
  'highlightjs': [
    'highlight.pack.min.js',
    'styles/github-gist.css'
  ]
}

vendor(VENDOR_FILES);
