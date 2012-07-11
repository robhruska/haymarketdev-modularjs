define([
	'hangman/view/Letter'
], function (Letter) {

	var Letters = Backbone.View.extend({

		tagName: 'ol',
		className: 'letters',

		initialize: function (options) {
			this.model.on('win', this.handleWin, this);
			this.model.on('lose', this.handleLoss, this);
		},

		render: function () {

			this.model.letters.each(function (letter) {

				var view = new Letter({
					model: letter
				});

				this.$el.append(view.render().el);
			}, this);

			return this;
		},

		handleWin: function () {
			this.$el.append("<div>You win!</div>");
		},

		handleLoss: function () {
			this.$el.append("<div>You lose :(</div>");
		}
	});

	return Letters;
});