var express = require('express');
var router = express.Router();

var users = [{
	id: 1,
	username: "samsepi0l"
}, {
	id: 2,
	username: "D0loresH4ze"
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
	console.log(req.body)
	res.send('OK')
})

module.exports = router;
