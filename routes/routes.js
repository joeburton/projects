
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'Projects', 
		loggedin: req.session.authenticated 
	});
});

router.get('/login', function(req, res, next) {
	res.render('login', { 
		title: 'Please Login', 
		loggedin: req.session.authenticated 
	});
	console.log('login: ', req.session.authenticated);
});

router.get('/admin', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { 
			authenticated: req.session.authenticated, 
			loggedin: req.session.authenticated  
		});
	} else {
		res.redirect('/login');
	}
	console.log(req.session.authenticated);
});

router.get('/admin/edit/:id', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { 
			title: 'Projects Details', 
			loggedin: req.session.authenticated  
		});
	} else {
		res.redirect('/login');
	}	
	console.log(req.session.authenticated);
});

router.get('/admin/add', function(req, res, next) {
	if (req.session.authenticated) {
		res.render('admin', { 
			title: 'Add', 
			loggedin: req.session.authenticated  
		});
	} else {
		res.redirect('/login');
	}	
	console.log(req.session.authenticated);
});

module.exports = router;

