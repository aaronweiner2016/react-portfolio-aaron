const express = require('express');
const router = express.Router();
const { Projects } = require('../../models');


router.get('/all', async (req, res) => {
    try {
        const projectsData = await Projects.findAll();
        console.log(projectsData)
        // res.json(categories)

    } catch (err) {
        console.log("here-----------", err);
        res.json(err);
    }
});

module.exports = router;