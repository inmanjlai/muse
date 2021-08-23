var express = require('express');
var router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});
const bcrypt = require("bcryptjs")

router.use(express.urlencoded({extended: false}));
const { User } = require("../db/models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", csrfProtection, async(req, res) => {
  res.render("login", { csrfToken: req.csrfToken()})
})

router.post("/login", csrfProtection, async(req, res) => { 
  const user = await User.findOne({where: req.body.username})

  const isValid = await bcrypt.compare(req.body.password, user.hashedPassword);
  console.log(isValid);
})

router.post("/signup", csrfProtection, async(req, res) => {
  const hash = bcrypt.hash(req.body.password, 10);
  await User.create({
    username: req.body.username,
    hashedPassword: hash,
    email: req.body.email,
    avatar: req.body.avatar
  })
})

module.exports = router;
