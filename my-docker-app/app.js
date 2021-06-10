
var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('I´m running on port 8081: Hello world!')
})