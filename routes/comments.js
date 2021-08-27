const express = require('express');
const router = express.Router();
const { Question, Answer, User, AComment } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');


// New comment on an answer

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const comment = await AComment.create({
        comment: req.body.comment,
        answer_id: req.body.answer_id,
        user_id: res.locals.user.id
    });

    res.redirect(`/questions/${req.body.question_id}`);
}));


//Update Comment

router.post('/:id(\\d+)/edit', requireAuth, asyncHandler(async(req, res, next) => {
    const comment = await AComment.findByPk(req.params.id)
    await comment.update({
        comment: req.body.comment,
    })
    res.redirect(`/questions/${req.body.id}`)
}))


//Delete Comment

router.post('/:id(\\d+)/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const comment = await AComment.findByPk(req.params.id)
    await comment.destroy()
    res.redirect(`/questions/${req.body.id}`);
}))


module.exports = router;
