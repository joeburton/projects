define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
], function($, _, Backbone, bootstrap) {
    
	var ProjectModel = Backbone.Model.extend({

		urlRoot: "/source",

		idAttribute: "_id"

	});

	return ProjectModel;
    
});
