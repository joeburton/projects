define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'AddProjectView'
], function($, _, Backbone, bootstrap, AddProjectView) {
    
	var IntroView = Backbone.View.extend({

		el: '.intro',

		events: {
			'click .add-project': 'addProjects'
		},

		addProjects: function () {
			app.navigate('admin/add', true);
		}

	});

	return IntroView;
    
});



