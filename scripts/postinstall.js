const path = require('path');
const fs = require('fs');


const working = process.cwd();
const current = path.resolve('.');

if (working === current) {
  // install to develop
  fs.writeFileSync('use', '');
} else {
  // install to use
  fs.writeFileSync('use', '');
}
