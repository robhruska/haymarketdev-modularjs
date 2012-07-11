define([
	'hangman/view/Man',
	'hangman/view/Letters',
	'hangman/view/Answer'
], function (Man, Letters, Answer) {

	var Board = Backbone.View.extend({

		render: function () {
			var options = {
				model: this.model
			};

			var man = new Man(options).render();
			var letters = new Letters(options).render();
			var answer = new Answer(options).render();

			this.$el.append(man.el, letters.el, answer.el);

			return this;
		}
	});

	return Board;
});