define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'text!templates/project.html',
    'text!templates/project-admin.html',
    'EditView'
], function($, _, Backbone, bootstrap, templatesUser, templatesAdmin, EditView) {
    
	var ProjectView = Backbone.View.extend({

		className: 'row',

		events: {
			'click .edit-project': 'editView'
		},

		templateUser: _.template(templatesUser),

		templateAdmin: _.template(templatesAdmin),
		
		render: function () {

			console.log(Backbone.history.getFragment());

			var template = (Backbone.history.getFragment() === 'admin') ? this.templateAdmin : this.templateUser;

			this.$el.html(template(this.model.toJSON()));
			
			return this;

		},

	    editView: function () {
	        app.navigate('admin/edit/' + this.model.get('_id'), true);
	    }

	});

	return ProjectView;
    
});
