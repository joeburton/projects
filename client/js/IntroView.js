define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'AddProjectView'
], function($, _, Backbone, bootstrap, AddProjectView) {
    
	var IntroView = Backbone.View.extend({

		el: '.intro',

		initialize: function () {
			var addProjectView = new AddProjectView();
		}

	});

	return IntroView;
    
});



