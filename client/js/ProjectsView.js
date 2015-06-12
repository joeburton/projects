define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectView'
], function($, _, Backbone, bootstrap, ProjectView) {
    
	var ProjectsView = Backbone.View.extend({

		el: '#projects',

		render: function () {

		    this.collection.each(_.bind(function (model) {
		      
		        var projectView = new ProjectView({model: model});
		        this.$el.append(projectView.render().el);

		    }, this));

		    return this;

		}

	});

	return ProjectsView;
    
});



