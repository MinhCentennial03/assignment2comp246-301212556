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
/* GET Router for displaying the login page*/
router.get('/login', indexController.displayLoginPage);
/* POST Router for processing the Login Page*/
router.post('/login', indexController.processLoginPage);


/* GET Router for displaying register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/register', indexController.processRegisterPage);
module.exports = router;


router.get('/contactpg', indexController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/contactpg', indexController.processRegisterPage);


router.get('/editpg', indexController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/editpg', indexController.processRegisterPage);
module.exports = router;


module.exports = router;



router.get('/logout', indexController.performLogout);

module.exports = router;
