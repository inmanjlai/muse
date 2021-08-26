const express = require("express");
const router = express.Router();
const { Question, User, Answer } = require('../db/models')
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


module.exports = router;
