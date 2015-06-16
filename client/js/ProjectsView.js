define([
    'jquery', 
    'underscore', 
    'backbone',
    'bootstrap',
    'ProjectView'
], function($, _, Backbone, bootstrap, ProjectView) {
    
	var ProjectsView = Backbone.View.extend({

		render: function () {

			var container = document.createDocumentFragment();

		    this.collection.each(_.bind(function (model) {
		      
		        var projectView = new ProjectView({model: model});
		        container.appendChild(projectView.render().el)
		        
		    }, this));

		    this.$el.append(container);

		    return this;

		}

	});

	return ProjectsView;
    
});



