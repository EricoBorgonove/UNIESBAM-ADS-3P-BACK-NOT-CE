const express = require ('express');
const router = express.Router();

const path = require('path');

router.use(express.static('../public'));

router.get('/algo', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../public', './algo.html'));
});
module.exports = router;

//http://localhost:3000/static/algo