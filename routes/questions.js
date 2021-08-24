const express = require('express');
const router = express.Router();
const { Question, Answer, User } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');

//this views all the questions on question page
router.get('/', asyncHandler(async (req, res, next) => {
    const questions = await Question.findAll({
        include: Answer,
        order: [['votes', 'DESC']]
    })
    // if(res.locals.user) {
    //     res.render(questions, user_id: res.locals.user.id)
    // }
    res.render('questions', { questions })
}))


//this should get the new question page
router.get('/new', requireAuth, asyncHandler(async (req, res, next) => {
    res.render('newquestion')
}))

//should post a new question
router.post('/', requireAuth, asyncHandler(async(req, res, next) => {
    const { title, details } = req.body
    const question = await Question.create({
        title,
        details,
        votes:1,
        user_id: res.locals.user.id
    })
    res.redirect('/questions')
}))

//delete a question by id
router.get('/:id(\\d+)/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    await question.destory()
    res.redirect('/questions')
}))






module.exports = router;
