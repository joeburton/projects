define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectModel',
], function($, _, Backbone, bootstrap, ProjectModel) {
    
	var ProjectsCollection = Backbone.Collection.extend({

		url: function () {
			
			var production = true;
			var url;

			if (production) {
			    // production
			    url = 'http://projects.joe-burton.com/projects';
			} else {
			    // local dev
			    url = 'http://localhost:3000/projects';
			}
			
			return url;

		},
		
		model: ProjectModel

	});

	return ProjectsCollection;
    
});



