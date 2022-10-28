var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home.ejs', { title: 'Home', });
});
/* GET About page. */

router.get('/about', function(req, res, next) {
  res.render('aboutme.ejs', { title: 'About', });
});


/* GET Project page. */

router.get('/projects', function(req, res, next) {
  res.render('project.ejs', { title: 'Project', });
});
/* GET Service page. */

router.get('/services', function(req, res, next) {
  res.render('servicepg.ejs', { title: 'Service', });
});
/* GET contact page. */

router.get('/contact', function(req, res, next) {
  res.render('contactpage.ejs', { title: 'Contact', });
});


module.exports = router;
