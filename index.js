const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const checkoutRoutes = require('./routes/checkout');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/checkout', checkoutRoutes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/build/index.html'));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});