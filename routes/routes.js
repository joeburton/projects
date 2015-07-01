
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Projects' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Please Login' });
});

router.get('/admin', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { authenticated: req.session.authenticated });
	} else {
		res.redirect('/login');
	}
});

router.get('/admin/edit/:id', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { title: 'Projects Details' });
	} else {
		res.redirect('/login');
	}	
});

router.get('/admin/add', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { title: 'Add' });
	} else {
		res.redirect('/login');
	}	
});

module.exports = router;

