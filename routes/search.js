const express = require("express");
const router = express.Router();
const { Question } = require('../db/models')

router.post('/', (req, res) => {
    let result = Question.findAll({
        where: {
            title: { [Op.iLike]: `%${req.body}%` },
            tag: { [Op.iLike]: `%${req.body}%` }
        }
    });

    res.render("result", {
        result
    });
})


module.exports = router;
