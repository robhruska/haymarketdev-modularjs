define([
    'hangman/view/Letter'
], function (Letter) {

    var Letterboard = Backbone.View.extend({
	el: 'ol',
	className: 'letterboard',

	render: function () {

	    this.model.letters.each(function (letter) {

		var view = new Letter({
		    model: letter
		});

		this.$el.append(view.render().el);
	    });

	    return this;
	}
    });
});