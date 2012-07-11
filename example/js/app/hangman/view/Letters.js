define([
	'hangman/view/Letter'
], function (Letter) {

	var Letters = Backbone.View.extend({

		tagName: 'ol',
		className: 'letters',

		render: function () {

			this.model.letters.each(function (letter) {

				var view = new Letter({
					model: letter
				});

				this.$el.append(view.render().el);
			}, this);

			return this;
		}
	});

	return Letters;
});