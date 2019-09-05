var express = require('express');
var router = express.Router();

const action = require('../controller/myaction')

router.post('/api/control', function(req, res, next) {
    const deg = req.body.dir == 1 ? 0 : 180;
    action(deg);
    res.send('sucess');
});

module.exports = router;

