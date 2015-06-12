define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'text!templates/project.html'
], function($, _, Backbone, bootstrap, projectTmpl) {
    
	var ProjectView = Backbone.View.extend({

		className: 'row',

		events: {
			'click .btn-default': 'open'
		},

		template: _.template(projectTmpl),

		render: function () {
			
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;

		},

		open: function (e) {
			console.log(e, this);
		}

	});

	return ProjectView;
    
});
