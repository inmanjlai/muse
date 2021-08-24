var express = require('express');
var router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});
const bcrypt = require("bcryptjs")
// const session = require('express-session');
// const cookieParser = require('cookie-parser');

const { User } = require("../db/models");
// const { secret } = require('../config');
const { restoreUser, requireAuth } = require('./auth');


// router.use(cookieParser(secret));
// router.use(session({
//   name: 'Session.sid',
//   secret: secret,
//   resave: false,
//   saveUninitialized: false
// }))

router.use(restoreUser);

// **ROUTER MIDDLEWARE**
router.use(express.urlencoded({extended: false}));
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
  // THIS WILL BE CALLED ONCE WE VALIDATE THE USER
    // CREATES AN AUTH KEY IN THE SESSION WHERE WE CAN STORE THE USER ID
const loginUser = async(req, res, user) => {
  req.session.auth = { userId: user.id}
}
  // DELETES THE AUTH KEY IN THE SESSION TO LOG THE USER OUT
const logoutUser = async(req, res) => {
  delete req.session.auth;
}
// **GET ALL USERS**
router.get('/', asyncHandler(async(req, res) => {
  const users = await User.findAll();
  res.render("users", { users })
}));

// **GET SIGN IN PAGE**
router.get("/login", csrfProtection, asyncHandler(async(req, res) => {
  res.render("login", { csrfToken: req.csrfToken() })
}))

// **GET SIGN UP PAGE**
router.get("/signup", csrfProtection, asyncHandler(async(req, res) => {
  res.render("signup", { csrfToken: req.csrfToken() })
}))

// **ROUTE TO LOG IN**
router.post("/login", csrfProtection, asyncHandler(async(req, res) => { 
  // MAKE A QUERY TO OUR DATABASE TO FIND A USER WITH THE SUPPLIED USERNAME
  const user = await User.findOne({where: {username: req.body.username}})
    // USE BCRYPT'S COMPARE METHOD TO CHECK IF THE SUPPLIED PASSWORD IS THE SAME
    // -> AS THE HASHED PASSWORD WE HAVE STORED IN THE DATABASE
  const isValid = await bcrypt.compare(req.body.password, user.hashedPassword);

      // IF THE COMPARE METHOD EVALUATES TO TRUE
        // WE LOG IN THE USER AND REDIRECT TO /USERS
  if(isValid) {
    loginUser(user)
    res.redirect("/users")
  }
}))

// **ROUTE TO SIGN UP**
router.post("/signup", csrfProtection, asyncHandler(async(req, res) => {
  // WE TAKE THE PASSWORD FROM THE REQUEST BODY AND HASH IT
  const hash = await bcrypt.hash(req.body.password, 10);
    // WE THEN CREATE A NEW USER STORING THE HASHED PASSWORD IN OUR DB FOR SECURITY
  await User.create({
    username: req.body.username,
    hashedPassword: hash,
    email: req.body.email,
    avatar: req.body.avatar
  })
  res.redirect("/")
}))

// **ROUTE TO LOG OUT**
router.get("/logout", asyncHandler(async(req, res) => {
  logoutUser();
  res.redirect("/users/login");
}));

module.exports = router;
