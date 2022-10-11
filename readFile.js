const fs = require('fs');

fs.readFile('/Users/luiz/projects/nodeBasics/text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});