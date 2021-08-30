var express = require('express');
var router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});
const bcrypt = require("bcryptjs")
const { userValidators, loginValidators, handleValidationErrors} = require("./utils");

const { User, Question, Answer } = require("../db/models");
const { restoreUser, requireAuth } = require('./auth');
const { validationResult } = require('express-validator');

// **ROUTER MIDDLEWARE**
router.use(express.urlencoded({extended: false}));
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
  // THIS WILL BE CALLED ONCE WE VALIDATE THE USER
    // CREATES AN AUTH KEY IN THE SESSION WHERE WE CAN STORE THE USER ID
const loginUser = async(req, res, user) => {
    req.session.auth = { userId: user.id}
    req.session.save( () => {
      res.redirect("/questions")
    })
}
  // DELETES THE AUTH KEY IN THE SESSION TO LOG THE USER OUT
const logoutUser = async(req, res) => {
  delete req.session.auth;
  req.session.save( ()=> {
    res.redirect("/users/login");
  })
}
// **GET ALL USERS**
router.get('/', asyncHandler(async(req, res) => {

  if(req.session.auth){
    const users = await User.findAll();
    return res.render("users", { users })
  }
  res.redirect("/users/login");  
}));

// GET USER PROFILE PAGE   
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {    
  const userId = parseInt(req.params.id, 10);  
  const UserProfile = await User.findByPk(parseInt(userId, 10));
  const questions = await Question.findAll({ where: { user_id: userId }, include: Answer});
  const answers = await Answer.findAll({ where: { user_id: userId }, include: Question });
  res.render('userpage', { UserProfile, questions, answers });        
}))


// **GET SIGN IN PAGE**
router.get("/login", csrfProtection, asyncHandler(async(req, res) => {
  res.render("login", { csrfToken: req.csrfToken() })
}))

// **GET SIGN UP PAGE**
router.get("/signup", csrfProtection, asyncHandler(async(req, res) => {
  res.render("signup", { csrfToken: req.csrfToken() })
}))

// **ROUTE TO LOG IN**
router.post("/login", loginValidators, csrfProtection, asyncHandler(async(req, res) => {
  // MAKE A QUERY TO OUR DATABASE TO FIND A USER WITH THE SUPPLIED USERNAME

  const validationErrors = validationResult(req);

  let errors = validationErrors.array().map((error) => error.msg)

  const user = await User.findOne({where: {username: req.body.username}});

  if (user === null) {
    const err = "That username and password combination is not valid";
    errors.push(err);
    return res.render("login", { csrfToken: req.csrfToken(), errors});
  }
    // USE BCRYPT'S COMPARE METHOD TO CHECK IF THE SUPPLIED PASSWORD IS THE SAME
    // -> AS THE HASHED PASSWORD WE HAVE STORED IN THE DATABASE
  const isValid = await bcrypt.compare(req.body.password, user.hashedPassword);

      // IF THE COMPARE METHOD EVALUATES TO TRUE
        // WE LOG IN THE USER AND REDIRECT TO /USERS
  if(isValid) {
    await loginUser(req, res, user)
  }
}));

// **ROUTE TO SIGN UP**
router.post("/signup", userValidators, csrfProtection, asyncHandler(async(req, res) => {
  const validationErrors = validationResult(req);

  let errors = validationErrors.array().map((error) => error.msg);
  console.log(errors)

  if (errors.length) {
    return res.render("signup", { csrfToken: req.csrfToken(), errors });
  }

  // WE TAKE THE PASSWORD FROM THE REQUEST BODY AND HASH IT
  const hash = await bcrypt.hash(req.body.password, 10);
    // WE THEN CREATE A NEW USER STORING THE HASHED PASSWORD IN OUR DB FOR SECURITY
  const user = await User.create({
    username: req.body.username,
    hashedPassword: hash,
    email: req.body.email,
    avatar: req.body.avatar
  })

  loginUser(req, res, user);
}));

// **ROUTE TO LOG OUT**
router.get("/logout", requireAuth, asyncHandler(async(req, res) => {
  await logoutUser(req, res);
  // res.redirect("/");
}));

// demo user login
router.post("/demologin", csrfProtection, asyncHandler(async(req, res) => {
  const demouser = await User.findOne({ where: {username: "demo"}});
  loginUser(req, res, demouser)
}))

module.exports = router;
