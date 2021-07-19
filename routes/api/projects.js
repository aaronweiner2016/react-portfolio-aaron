const express = require('express');
const router = express.Router();
// const { Category } = require('../../models');


router.get('/all', async (req, res) => {
    try {
        // const categories = await Category.findAll();

        // res.json(categories)
        console.log("good")

    } catch (err) {
        console.log("here-----------", err);
        res.json(err);
    }
});

module.exports = router;