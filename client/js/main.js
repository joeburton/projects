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
    'ProjectModel',
    'IntroView',
    'AddProjectView'
], function($, _, Backbone, bootstrap, ProjectsView, ProjectsCollection, EditView, ProjectModel, IntroView, AddProjectView) {

    var AppRouter = Backbone.Router.extend({
        
        routes: {
            "": "start",
            "admin": 'start',
            "admin/add": 'addProject',
            "admin/edit/:id": 'projectDetails'
        },

        initialize: function() {

            var introView = new IntroView();

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
                    $('#edit-project').modal('show');
                    var editView = new EditView({model: model});
                }
            });

        },

        addProject: function () {

            var addProjectView = new AddProjectView();
            $('#add-project').modal('show');

        }

    });

    app = new AppRouter();
    Backbone.history.start({pushState: true});

});







