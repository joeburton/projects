
// Mongo objects
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

// API
var production = true;
var url;
var dbObj;
var sess;

// Connection URL 
if (production) {
    // production
    url = 'mongodb://projects:UGRJRzNidzVFK2JZbWdRYjdzZGpETFdCUURDeXRkeHYwUlRJUkNsdHJNcz0K@172.17.0.15:27017/projectsdb-production';
} else {
    // local dev
    url = 'mongodb://localhost:27017/projectsdb';
}

// standards dev ip 27017

// get mongodb port
// sudo lsof -iTCP -sTCP:LISTEN | grep mongo

// Use connect method to connect to the Server 
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server, http://localhost:3000/", db);
    dbObj = db;
});


// login
exports.login = function (req, res) {

    sess = req.session;

    sess.user = req.body.user;
    sess.password = req.body.password;

    if (sess.user === 'projects' && sess.password === 'admin') {
        console.log('Login Successful');
        sess.authenticated = true;
        res.redirect('/admin');
    } else {
        console.log('Login Failed');
        res.redirect('/login');
    }

};


// logout
exports.logout = function (req, res) {

    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Successful logout');
            res.redirect('/login');
        }
    });

};


// get all projects in the collection
exports.findAll = function (req, res) {

    console.log(dbObj);

    var collection = dbObj.collection('projects');

    collection.find({}).toArray(function (err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        res.send(docs);
    });

};

// get projects by id
exports.findById = function (req, res) {

    var id = req.params.id;

    console.log('Retrieving project: ' + id);

    dbObj.collection('projects', function (err, collection) {
        collection.findOne({ '_id': new ObjectId(id) }, function (err, item) {
            res.send(item);
        });
    });

};

// add a new project
exports.addProject = function (req, res) {

    var project = req.body;

    console.log('Adding Project: ' + JSON.stringify(project));

    dbObj.collection('projects', function (err, collection) {
        collection.insert(project, { safe: true }, function (err, result) {
            if (err) {
                res.send({ 'Error': 'an error has occurred' });
            } else {
                console.log('Success: ' + JSON.stringify(result));
                res.send(JSON.stringify(result));
            }
        });
    });

}

// update project
exports.updateProject = function (req, res) {
    var id = req.params.id;
    var project = req.body;
    delete project._id;
    console.log('Project: ' + project);
    console.log('Updating project: ' + id);
    console.log(JSON.stringify(project));
    dbObj.collection('projects', function (err, collection) {
        collection.update({ '_id': new ObjectId(id) }, project, { safe: true }, function (err, result) {
            if (err) {
                console.log('Error updating project: ' + err);
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(project);
            }
        });
    });
}

// delete project
exports.deleteProject = function (req, res) {
    var id = req.params.id;
    console.log('Deleting project: ' + id);
    dbObj.collection('projects', function (err, collection) {
        collection.remove({ '_id': new ObjectId(id) }, { safe: true }, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred - ' + err });
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

// populate database
exports.populateDatabase = function (req, res) {

    var projects = [
        {
            project: "Perfect Volkswagen",
            link: "https://perfect.volkswagen.co.uk",
            company: "Tribal Worldwide",
            skills: "Backbone, Require, Jasmine, jQuery, HTML5, CSS3/SASS & Gulp",
            description: "My Perfect Volkswagen is a SPA built in Backbone using Require to manage modules, SASS for the CSS and Gulp to manage the client-side files. I was responsible for adding new features and introducing unit testing using Jasmine."
        },
        {
            project: "Avios Group",
            link: "https://aviosgroup.com/",
            company: "Tribal Worldwide",
            skills: "Node, Express, Handlebars, CSS3, JavaScript/ jQuery, Gulp",
            description: "Avios Group is a Mobile First Responsive website I worked on whilst at Tribal Worldwide. It's built using Node, Express, Handlebars, CSS3 and Gulp to manage the client-side files."
        },
        {
            project: "Helix Property",
            link: "http://www.helixproperty.co.uk/",
            company: "Millimetre Media",
            skills: "JavaScript, Browserify, CSS, PHP, Gulp",
            description: "I was the sole Front-end Developer on this project. I used a Mobile First Responsive approach, using HTML5, CSS3 JavaScript/ jQuery and Browserify to manage my modules with Gulp to manage the front-end workflow."
        },
        {
            project: "m.lastminute.com",
            link: "http://m.lastminute.com",
            company: "lastminute.com",
            skills: "Backbone, JavaScript, Jasmine, Require, Grunt",
            description: "Whilst working for lastminute.com I worked on two specific projects. For the first project I created an HTML5, LESS/ CSS3 & JavaScript mobile-first responsive search form component that used the Bootstrap framework for the underlying grid and basic styling."
        },
        {
            project: "Closer Magazine",
            link: "http://www.closeronline.co.uk",
            company: "Bauer Media",
            skills: "JavaScript, Backbone, Jasmine, Require",
            description: " I was employed by Bauer Media to work across two teams, the UI Team and the Back end CMS Team. In the UI team I contributed towards the development of the responsive front-end build of the new Closer Magazine online edition creating responsive HTML/CSS page templates and writing any JavaScript functionality where necessary"
        },
        {
            project: "Blue Star",
            link: "http://joe-burton.com/bluestar/",
            company: "Rank Interactive",
            skills: "Backbone, JavaScript, Jasmine, Require",
            description: "I was responsible for managing a team of Front-end Developers in the responsive rebuild of bluesq.com. This involved creating an HTML5, LESS/ CSS and JavaScript framework that worked across mobile, tablet and desktop. I was also responsible on a day-to-day basis for managing the production of HTML prototypes to demonstrate different ideas from the UX Team."
        },
        {
            project: "Fabulous Magazine",
            link: "http://www.thesun.co.uk/sol/homepage/fabulous",
            company: "Engine",
            skills: "HTML5, CSS3, JavaScript/jQuery",
            description: "I worked for Jam @ The Engine Group in Soho as a Mobile Front-end Developer building HTML5, CSS3, JavaScript/jQuery smart-phone and desktop websites. This contract was a great opportunity to develop my Mobile development skills working on the mobile version of the fabulous magazine http://fabulousmag.co.uk and several small Sky mobile promotional sites."
        },
        {
            project: "John Lewis",
            link: "http://www.johnlewis.com",
            company: "SapientNitro",
            skills: "HTML5, CSS3, JavaScript/jQuery",
            description: "Whilst working for Sapient on this contract I was based client side at John Lewis, working in a team of Front-end Developers in an Agile Software Development Environment. I was responsible for creating well structured JavaScript/jQuery functionality and clean HTML/CSS template components keeping all code as re-usable and standards compliant as possible. We introduced HTML5 and CSS3 to the project using a progressive enhancement approach so as not to limit the site to just the latest browsers."
        }];

    dbObj.collection('projects', function (err, collection) {
        collection.insert(projects, { safe: true }, function (err, result) {
            res.send(result);
            console.log('ADD DATA...');
        });
    });

}
