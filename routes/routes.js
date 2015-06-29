
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Projects' });
});

router.get('/admin/edit/:id', function(req, res, next) {
	res.render('admin', { title: 'Projects Details' });
	console.log(req.session);
});

router.get('/admin/add', function(req, res, next) {
	console.log('add a project');
	res.render('admin', { title: 'Add' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Please Login' });
});

router.get('/admin', function(req, res, next) {
	if (req.session.authenticated) {
		//console.log(req.session.authenticated);
		res.render('admin', { authenticated: req.session.authenticated });
	} else {
		//console.log(req.session.authenticated);
		res.redirect('/login');
	}
});

module.exports = router;

