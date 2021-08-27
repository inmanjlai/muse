const express = require('express');
const router = express.Router();
const { Question, Answer, User, QTag, Tag, AComment } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');

//this views all the questions on question page
router.get('/', asyncHandler(async(req, res, next) => {
    const questions = await Question.findAll({
        include: [
            {
                model: Answer,
                order: [['votes', 'DESC']],
                limit: 1
            },
            {
                 model: User
             }
            ],
        order: [['votes', 'DESC']],
    })

    // console.log(questions, "<----------------------------------")
    // if(res.locals.user) {
    //     res.render(questions, user_id: res.locals.user.id)
    // }
    res.render('allquestions', { questions })
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

router.get('/:id(\\d+)/', asyncHandler(async(req, res, next) => {
    const question = await Question.findOne({
        where: { id: req.params.id},
        include: [
            {
                model: Answer,
                include: [
                    {model: User}, {model: AComment, include: User}
                ]
            },
            {
                model: User
            }
        ]
    });

    const questionTag = await QTag.findAll({
        where: {
            question_id: question.id
        }
    });

    let answer;

    if(res.locals.user){
        answer = await Answer.findOne({where: { question_id: question.id, user_id: res.locals.user.id },})
        // console.log(answer, "<-------------------------------------------")
    }

    const allTags = await Tag.findAll();

    let isMyQuestion = false;
    if(res.locals.user){
        if(question.user_id === res.locals.user.id){
            isMyQuestion = true;
        }
    }

    res.render('question', { question, isMyQuestion, questionTag, allTags});
}))


//delete a question by id
router.post('/:id(\\d+)/edit', requireAuth, asyncHandler(async(req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    await question.update({
        title: req.body.title,
        details: req.body.details,
    })
    res.redirect(`/questions/${req.body.id}`)
}))

router.post('/:id(\\d+)/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    await question.destroy()
    res.redirect('/questions')
}))






module.exports = router;
