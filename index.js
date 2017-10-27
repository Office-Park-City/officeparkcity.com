const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const checkoutRoutes = require('./routes/checkout');
const mailRoutes = require('./routes/mail');
const winston = require('winston');

global.logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/checkout', checkoutRoutes);
app.use('/mail', mailRoutes);

app.get('*', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/build/index.html'));
});

app.use(function(err, req, res, next) {

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

    return res.status(400).send('Invalid JSON');
  }

  if (err.user_generated_error) {

    return res.status(400).send(err.message);
  }

  global.logger.error(err);

  return next(err);
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
