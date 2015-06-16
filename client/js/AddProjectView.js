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
			'click .close-modal': 'close'
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
			
			var that = this;

	    	project.save(null, {
	    		success: function (model, response, options) {
	    			that.undelegateEvents();
	    			console.log('Project saved to MongoDB');
	    			$('#add-project').modal('hide');
	                app.navigate('/', true);
	    		}, 
	    		error: function (model, response, options) {
	    			alert('Sorry something went wrong');
	    		}
	    	});

		},

		close: function () {

			app.navigate('/', true);
			console.log('cancel');
			
		}
		
	});

	return AddProjectView;
    
});



