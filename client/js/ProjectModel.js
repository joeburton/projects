define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
], function($, _, Backbone, bootstrap) {
    
	var ProjectModel = Backbone.Model.extend({

		urlRoot: "/source",

		idAttribute: "_id",

		validate: function(attrs) {

			if (!attrs.project.length) {
				return 'You must provide a project name.';
			}

			if (!attrs.company.length) {
				return 'You must provide a company name.';
			}

			if (!attrs.skills.length) {
				return 'You must provide a list of skills used on the project.';
			}

			if (!attrs.description.length) {
				return 'You must a project description.';
			}

		}

	});

	return ProjectModel;
    
});
