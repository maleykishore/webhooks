var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/paymenthooks', function(req, res, next){
    console.log("request payload");
    console.log(req.body);
    console.log("**********************************");
   res.json({"status":"success","code":0});
});

router.post('/pf', function (req, res, next) {
    res.sendStatus(500);
});


module.exports = router;
