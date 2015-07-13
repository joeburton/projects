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
			'click [data-close-modal]': 'close'
		},

		initialize: function () {

			var that = this;
			
			$('#add-project').on('hidden.bs.modal', function () {
				that.close();
			});

		},

		saveProject: function () {

	    	var project = this.$el.find('[data-project-name]').val();
	    	var company = this.$el.find('[data-company-name]').val();
	    	var link = this.$el.find('[data-link]').val();
	    	var skills = this.$el.find('[data-skills]').val();
	    	var description = this.$el.find('[data-description]').val();

	    	var project = new ProjectModel({
	    		'project': project,
	    		'company': company,
	    		'link': link,
	    		'skills': skills,
	    		'description': description,
	    	});

	    	project.on('invalid', function (project, error) {
	    		alert('Error: ' + error);
	    	});
			
	    	var that = this;

	    	project.save(null, {
	    		success: function (model, response, options) {
	    			console.log('Project saved to MongoDB');
	    			that.close();
	    		}, 
	    		error: function (model, response, options) {
	    			alert('Sorry something went wrong');
	    		}
	    	});

		},

		close: function () {

			console.log('Close: Add project');
			
			$('#add-project').off();
			$('#add-project').modal('hide');
			this.undelegateEvents();

			app.navigate('/admin', true);

		}
		
	});

	return AddProjectView;
    
});
