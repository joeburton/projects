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
    'ProjectsCollection',
    'EditView',
    'ProjectModel'
], function($, _, Backbone, bootstrap, ProjectsView, ProjectsCollection, EditView, ProjectModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "start",
            "projects": 'start',
            "projects/:id": 'projectDetails'
        },

        start: function () {
            
            var projectsCollection = new ProjectsCollection();

            projectsCollection.fetch({
                success: function (collection) {
                    $('#projects').html(new ProjectsView({collection: collection}).render().el);
                },
                error: function () {
                    console.log('Sorry something went wrong');
                }
            });
            
        },

        projectDetails: function (id) {

            var projectModel = new ProjectModel({_id: id});
            
            projectModel.fetch({
                success: function(model) {
                    console.log('success', model);
                    $('#edit-project').modal();
                    var editView = new EditView({model: model});
                }
            });

        }

    });

    app = new AppRouter();
    Backbone.history.start({pushState: true});

});







