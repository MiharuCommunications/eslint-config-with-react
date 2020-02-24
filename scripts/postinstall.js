const path = require('path');
const fs = require('fs');


const working = process.cwd();
const current = path.resolve('./');

console.log(working);
console.log(current);

const data = {
  working,
  current,
};

const text = JSON.stringify(data);


if (working === current) {
  // install to develop
  fs.writeFileSync('develop', text);
} else {
  // install to use
  fs.writeFileSync('use', text);
}
