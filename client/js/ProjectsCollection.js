define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectModel',
], function($, _, Backbone, bootstrap, ProjectModel) {
    
	var ProjectsCollection = Backbone.Collection.extend({

		model: ProjectModel,

		url: "/source"

	});

	return ProjectsCollection;
    
});



