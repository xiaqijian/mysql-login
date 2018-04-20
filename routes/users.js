var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res, next) => {
   res.render('login', { title: 'login'})
})

router.get('/regis', (req, res, next) => {
  res.render('regis', { title: 'regis' })
})

module.exports = router;
