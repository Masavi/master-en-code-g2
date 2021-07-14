require('dotenv').config();
const mongoose = require('mongoose');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));

fs.createReadStream('e.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // results.slice(0, 100).map(data => console.log(data))
    // for (let index = 0; index < 100; index++) {
    //   console.log(results[index]);
    // }
  });

