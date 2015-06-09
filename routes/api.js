
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var production = true;
var url;
var dbObj;


// Connection URL 
if (production) {
    url = 'mongodb://projects:@172.17.0.17:27017/projects-production';
} else {
    url = 'mongodb://localhost:27017/projectsdb';
}


// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    dbObj = db;
});


// get all projects in the collection
exports.findAll = function(req, res) {
    
    var collection = dbObj.collection('projects');

    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.dir(docs);
        res.send(docs);
    });

};


// get projects by id
exports.findById = function(req, res) {
    
    var id = req.params.id;

    console.log('Retrieving project: ' + id);

    dbObj.collection('projects', function(err, collection) {
        collection.findOne({'_id':new ObjectId(id)}, function(err, item) {
            res.send(item);
        });
    });

};


// add a new project
exports.addProject = function(req, res) {
    
    // use with post @TODO
    // var project = req.body;
    
    // temp data
    var project = {
        'project': 'http://fabulousmag.co.uk',
        'company': 'Jam @ Engine',
        'skills': 'Backbone, JavaScript, Jasmine, Require',
        'description': 'I worked for Jam @ The Engine Group in Soho as a Mobile Front-end Developer building HTML5, CSS3, JavaScript/jQuery smart-phone and desktop websites. This contract was a great opportunity to develop my Mobile development skills working on the mobile version of the fabulous magazine http://fabulousmag.co.uk and several small Sky mobile promotional sites.'
    };

    console.log('Adding Project: ' + JSON.stringify(project));
    
    dbObj.collection('projects', function(err, collection) {
        collection.insert(project, {safe:true}, function(err, result) {
            if (err) {
                //populateDB();
                res.send({'Error': 'an error has occurred'});
            } else {
                console.log('Success: ' + result);
                res.send(result);
            }
        });
    });

}


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// var mongo = require('mongodb');

// var Server = mongo.Server,
//     Db = mongo.Db,
//     BSON = mongo.BSONPure;

// var dev = true;
// var production = false;

// if (dev) { // dev
//     var server = new Server('localhost', 27017, {auto_reconnect: true});
//     db = new Db('projectsdb', server, {safe: true});
// } else if (production) { // production
//     var server = new Server('localhost', 27017, {auto_reconnect: true});
//     db = new Db('node-app-production', server, {safe: true});
// }


/*
MONGODB_DATABASE: node-app-production
MONGODB_HOST:     172.17.0.21
MONGODB_PASSWORD: WHA0TGJnd3ZHWHFDcTRqWmJuL0xmb1BiazhZenFmTmM4a1hySHFvSnRrcz0K
MONGODB_PORT:     27017
MONGODB_USERNAME: node-app
*/


// db.open(function(err, db) {
//     if(!err) {

//         if (dev) {
//             console.log("Connected to 'projectsdb' production database");
//         } else if (production) {
//             console.log("Connected to 'node-app-production' local database");
//         }       
        
//         db.collection('projects', {safe:true}, function(err, collection) {
//             if (err) {
//                 console.log("The 'projects' collection doesn't exist. Creating it with sample data...");
//                 populateDB();
//             }
//         });

//     }
// });


// exports.findAll = function(req, res) {
//     db.collection('projects', function(err, collection) {
//         collection.find().toArray(function(err, items) {
//             res.send(items);
//         });
//     });
// };


// exports.findById = function(req, res) {
//     var id = req.params.id;
//     console.log('Retrieving project: ' + id);
//     db.collection('projects', function(err, collection) {
//         collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
//             res.send(item);
//         });
//     });
// };

// exports.addWine = function(req, res) {
//     var wine = req.body;
//     console.log('Adding wine: ' + JSON.stringify(wine));
//     db.collection('wines', function(err, collection) {
//         collection.insert(wine, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('Success: ' + JSON.stringify(result[0]));
//                 res.send(result[0]);
//             }
//         });
//     });
// }

// exports.updateWine = function(req, res) {
//     var id = req.params.id;
//     var wine = req.body;
//     delete wine._id;
//     console.log('Updating wine: ' + id);
//     console.log(JSON.stringify(wine));
//     db.collection('wines', function(err, collection) {
//         collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
//             if (err) {
//                 console.log('Error updating wine: ' + err);
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('' + result + ' document(s) updated');
//                 res.send(wine);
//             }
//         });
//     });
// }

// exports.deleteWine = function(req, res) {
//     var id = req.params.id;
//     console.log('Deleting wine: ' + id);
//     db.collection('wines', function(err, collection) {
//         collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred - ' + err});
//             } else {
//                 console.log('' + result + ' document(s) deleted');
//                 res.send(req.body);
//             }
//         });
//     });
// }

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var projects = [
    {
        project: "m.lastminute.com",
        company: "lastminute.com",
        skills: "Backbone, JavaScript, Jasmine, Require",
        description: "Whilst working for lastminute.com I worked on two specific projects. For the first project I created an HTML5, LESS/ CSS3 & JavaScript mobile-first responsive search form component that used the Bootstrap framework for the underlying grid and basic styling."
    },
    {
        project: "Blue Square",
        company: "Rank Interactive",
        skills: "Backbone, JavaScript, Jasmine, Require",
        description: "I was responsible for managing a team of Front-end Developers in the responsive rebuild of bluesq.com. This involved creating an HTML5, LESS/ CSS and JavaScript framework that worked across mobile, tablet and desktop. I was also responsible on a day-to-day basis for managing the production of HTML prototypes to demonstrate different ideas from the UX Team."
    },
    {
        project: "Closer Magazine",
        company: "Bauer Media",
        skills: "JavaScript, Backbone, Jasmine, Require",
        description: " I was employed by Bauer Media to work across two teams, the UI Team and the Back end CMS Team. In the UI team I contributed towards the development of the responsive front-end build of the new Closer Magazine online edition creating responsive HTML/CSS page templates and writing any JavaScript functionality where necessary"
    }];

    db.collection('projects', function(err, collection) {
        collection.insert(projects, {safe:true}, function(err, result) {});
    });

};
