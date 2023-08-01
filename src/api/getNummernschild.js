const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res, next) => {
    const nummernschild = fs.readFileSync(`./src/models/nummernschilder.json`);
    const nummernschildJSON = JSON.parse(nummernschild);

    const kurzel = req.query.kurzel;
    if (!kurzel) {
        res.sendStatus(404);
    }
    const k = nummernschildJSON.find(k => k.kurz === kurzel);
    res.json(k);
})


module.exports = router;