const express = require('express');
const router = express.Router();
const { Question, Answer, User } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');


router.post('/', requireAuth, asyncHandler(async(req, res, next) => {
    const answer = await Answer.create({
        answer: req.body.answer,
        votes: 1,
        question_id: req.body.question-id,
        user_id: res.locals.user.id
    });

    res.redirect(`/questions/${req.body.question-id}`);
}));



router.delete('/:id(\\d+)/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const answer = await Answer.findByPk(req.params.id)
    await answer.destory()
    res.redirect(`/questions/${req.params.id}`);
}))

module.exports = router;
