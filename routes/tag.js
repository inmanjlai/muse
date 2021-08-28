const express = require("express");
const router = express.Router();
const { Question, User, Answer, Tag, QTag } = require('../db/models');
const { asyncHandler } = require("./utils")

router.post('/', asyncHandler(async(req, res) => {
    const tag = await Tag.create({
        name: req.body.name
    });

    const association = await QTag.create({
        question_id: req.body.id,
        tag_id: tag.id
    })

    res.redirect(`/questions/${req.body.id}`);
}));

router.post("/:id(\\d+)/delete", asyncHandler(async(req, res)=>{
    const tag = await Tag.findByPk(req.params.id);
    await tag.destroy();
}))





module.exports = router;
