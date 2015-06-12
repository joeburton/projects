require.config({
    paths: {
        jquery: 'lib/jquery',
        bootstrap: 'lib/bootstrap',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        templates: '../templates',
        text: 'lib/text'
    }
});

define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectsView',
    'ProjectsCollection'
], function($, _, Backbone, bootstrap, ProjectsView, ProjectsCollection) {
    
    var projectsCollection = new ProjectsCollection()
        
    projectsCollection.fetch({
        success: function (collection) {
            var projectsView = new ProjectsView({collection: collection}).render();
        },
        error: function () {
            console.log('Sorry something went wrong: ');
        }
    });
   
});






