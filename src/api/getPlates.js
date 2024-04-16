const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res, next) => {
    const platesData = fs.readFileSync(`./src/models/platesData.json`);
    const platesJSON = JSON.parse(platesData);

    const abbreviation = req.query.abbreviation;
    if (!abbreviation) {
        res.sendStatus(404);
    }
    const plate = platesJSON.find(p => p.abbreviation === abbreviation);
    if (!plate) [
        res.sendStatus(404)
    ]
    res.json(plate);
})


module.exports = router;