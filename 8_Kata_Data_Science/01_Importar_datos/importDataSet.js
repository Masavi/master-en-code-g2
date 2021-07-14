const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('e.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // results.slice(0, 100).map(data => console.log(data))
    for (let index = 0; index < 100; index++) {
      console.log(results[index]);
    }
  });

