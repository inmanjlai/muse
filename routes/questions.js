const express = require('express');
var router = express.Router();
const { Question } = require('../db/models')

router.get('/', (req, res) => {
    res.render('question', { Question })
})

router.get('/new', (req, res) => {
    res.render('newquestion', { Question })
    
})






module.exports = router;
