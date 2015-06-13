define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'text!templates/project.html',
    'EditView'
], function($, _, Backbone, bootstrap, projectTmpl, EditView) {
    
	var ProjectView = Backbone.View.extend({

		className: 'row',

		events: {
			'click .edit-project': 'editView'
		},

		template: _.template(projectTmpl),
		
		render: function () {
			
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;

		},

	    editView: function () {
	        app.navigate('projects/' + this.model.get('_id'), true);
	    }

	});

	return ProjectView;
    
});
