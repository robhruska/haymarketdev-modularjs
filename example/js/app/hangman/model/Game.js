define([
	'hangman/model/Letter'
], function (Letter) {

	var Game = Backbone.Model.extend({

		initialize: function (attrs) {
			this.letters = new Backbone.Collection();
			for (var i = 97; i <= 122; i++) {
				this.letters.add(new Letter({
					character: String.fromCharCode(i)
				}));
			}
		},

		guess: function (letter) {
			// TODO mark guessed
		}
	});

	return Game;
});