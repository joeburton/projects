define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'text!templates/project.html'
], function($, _, Backbone, bootstrap, projectTmpl) {
    
	var EditView = Backbone.View.extend({

		el: '#edit-project',

		events: {
			'click .btn-danger.delete': 'deleteProject',
			'click .btn-primary.save': 'updateProject',
			'click .close-modal': 'close'
		},

		initialize: function () {

	    	this.$el.find('[data-project-name]').val(this.model.get('project'));
	    	this.$el.find('[data-company-name]').val(this.model.get('company'));
	    	this.$el.find('[data-skills]').val(this.model.get('skills'));
	    	this.$el.find('[data-description]').val(this.model.get('description'));

		},

	    deleteProject: function () {

	    	var that = this;

	        this.model.destroy({
	            success: function () {
	                that.undelegateEvents();
	                console.log('Project deleted successfully');
	                $('#edit-project').modal('hide');
	                app.navigate('/', true);
	            },
	            error: function () {
	                alert('Sorry something went wrong.');
	            }
	        });
	        
	    },

	    updateProject: function () {
	    	
	    	var project = this.$el.find('[data-project-name]').val();
	    	var company = this.$el.find('[data-company-name]').val();
	    	var skills = this.$el.find('[data-skills]').val();
	    	var description = this.$el.find('[data-description]').val();
	    	var that = this;

	    	this.model.save({
	    		'project': project,
	    		'company': company,
	    		'skills': skills,
	    		'description': description
	    		},{
	    		success: function () {
	    			that.undelegateEvents();
					console.log('Project updated successfully');
	                $('#edit-project').modal('hide');
	                app.navigate('/', true);
	    		},
	    		error: function () {
	    			alert('Sorry something went wrong.');
	    		}
	    	});

	    },

	    close: function () {

	    	app.navigate('/', true);  
	    	console.log('close');

	    }
	    
	});

	return EditView;
    
});
