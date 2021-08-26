const express = require('express');
const router = express.Router();
const { Question, Answer, User, AComment } = require('../db/models')//AComment
const { Op } = require('sequelize')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('./auth');    


// New comment on an answer 

router.post('/a/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const comment = req.body.comment 

    const thisComment = req.params.id.findByPk(req.params.id, {
        include: Answer
    }); 
}))

//Update Comment 


//Delete Comment 



module.exports = router; 