define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectModel'
], function($, _, Backbone, bootstrap, ProjectModel) {
    
	var AddProjectView = Backbone.View.extend({

		el: '#add-project',

		events: {
			'click .save': 'saveProject',
			'click .cancel': 'cancel'
		},

		initialize: function () {
			console.log('add project init');
		},

		saveProject: function () {

	    	var project = this.$el.find('[data-project-name]').val();
	    	var company = this.$el.find('[data-company-name]').val();
	    	var skills = this.$el.find('[data-skills]').val();
	    	var description = this.$el.find('[data-description]').val();

	    	var project = new ProjectModel({
	    		'project': project,
	    		'company': company,
	    		'skills': skills,
	    		'description': description,
	    	});
			
	    	project.save(null, {
	    		success: function (model, response, options) {
	    			console.log('Project saved to MongoDB', model, response, options);
	    			$('#add-project').modal('hide');
	                app.navigate('/', true);
	    		}, 
	    		error: function (model, response, options) {
	    			console.log('Sorry something went wrong', model, response, options);
	    		}
	    	});

		},

		cancel: function () {
			console.log('cancel');
		}
		
	});

	return AddProjectView;
    
});



