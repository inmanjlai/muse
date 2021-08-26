const express = require('express');
const router = express.Router();
const { Question, Answer, User, AComment } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');


// New comment on an answer

router.post('/', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const comment = await AComment.create({
        comment: req.body.comment,
        answer_id: req.body.id,
        user_id: res.locals.user.id
    });

    res.redirect(`/questions/${req.body.id}`);
}))


//Update Comment


//Delete Comment



module.exports = router;
