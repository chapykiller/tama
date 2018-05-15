var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var db = require('./db');
var passport = require('passport');
var cors = require('cors');

require('./config/passport');

// Routes
var usersRouter = require('./routes/users');
var petRouter = require('./routes/pet');

// Database
db.connect();

var app = express();

// CORS
app.use(cors({
  origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Authentication
app.use(passport.initialize());

app.use('/users', usersRouter);
app.use('/pet', petRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // console.error(err);

  // render the error page
  res.status(err.status || 500);
  res.send(err.status + ' ' + err.name + ': ' + err.message);
});

module.exports = app;
