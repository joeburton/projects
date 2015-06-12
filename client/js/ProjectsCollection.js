define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectModel',
], function($, _, Backbone, bootstrap, ProjectModel) {
    
	var ProjectsCollection = Backbone.Collection.extend({

		url: 'http://localhost:3000/projects',

		model: ProjectModel

	});

	return ProjectsCollection;
    
});



