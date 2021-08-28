const express = require("express");
const router = express.Router();
const { Question, User, Answer, Tag } = require('../db/models')
const { Op } = require('sequelize')
const { asyncHandler } = require("./utils")

router.post('/', asyncHandler(async(req, res) => {
    let results = await Question.findAll({
        where: {
            title: { [Op.iLike]: `%${req.body.searchQuery}%` }
            // tag: { [Op.iLike]: `%${req.body}%` }
        },
        include: [{model: User}, {model:Answer, order: [["votes", "DESC"]], limit: 1}]
    });

    console.log(results, "<---------------------------------------")

    res.render("results", {
        results
    });
}))

router.post("/tag", asyncHandler(async(req, res) => {
    let results = await Tag.findAll({
        where: { name: req.body.name },
        include: {
            model: Question,
            include: 
            [
                {model: Answer},
                {model: User}
            ]
        }
    })
    // console.log(results[0].Questions[0].title, "<----------------------------------")
    // let results = await Question.findAll({ include: { model: Tag, where: { name: req.body.name }}});

    res.render("tagResults", { results });
}))


module.exports = router;
