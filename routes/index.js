var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(req.id);
    // res.redirect("http://sqvdj.cn/game/sl/index.html");
});

module.exports = router;
