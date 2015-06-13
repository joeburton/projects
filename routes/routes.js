var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Index' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Projects' });
});

router.get('/projects/:id', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Projects' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
