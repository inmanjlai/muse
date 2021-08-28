const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const questionRouter = require("./routes/questions")
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const answersRouter = require('./routes/answers');
const tagRouter = require('./routes/tag');
const commentRouter = require('./routes/comments');
const { secret } = require("./config");
const { restoreUser, requireAuth } = require('./routes/auth');


const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: secret,
    store,
    saveUninitialized: false,
    resave: false,
  })
  );
  app.use(restoreUser);
// create Session table if it doesn't already exist
store.sync();

//testing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionRouter);
app.use('/search', searchRouter);
app.use('/answers', answersRouter);
app.use('/tags', tagRouter);
app.use('/comments', commentRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// hello world
