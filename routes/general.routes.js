const express = require ('express');
const router = express.Router();

router.get('/health', (req, res) => {
    res.send("App running ok")
});
router.get('/h', (req, res) => {
    res.send("rota h")
});

module.exports = router;