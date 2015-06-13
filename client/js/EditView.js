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
			'click .btn-default.cancel': 'close'
		},

		initialize: function () {

		},

	    deleteProject: function () {
	        this.model.destroy({
	            success: function () {
	                console.log('Wine deleted successfully');
	                $('#edit-project').modal('hide');
	                app.navigate('/', true);
	            },
	            error: function () {
	                console.log('Something went wrong: ');
	            }
	        });
	        return false;
	    },

	    close: function () {
	    	app.navigate('/', true);  
	    	console.log('close');
	    }
	    
	});

	return EditView;
    
});
