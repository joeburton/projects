var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Index' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Projects' });
});

router.get('/projects/:id', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Projects Details' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Project Directory - About' });
});

router.get('/add', function(req, res, next) {
  res.render('index', { title: 'Project Directory - Add' });
});

module.exports = router;
