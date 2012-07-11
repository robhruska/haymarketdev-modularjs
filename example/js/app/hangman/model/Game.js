define([
	'hangman/model/Letter'
], function (Letter) {

	var Game = Backbone.Model.extend({

		initialize: function (attrs) {
			this.maxMisses = 5;

			this.letters = new Backbone.Collection();
			for (var i = 97; i <= 122; i++) {
				this.letters.add(new Letter({
					character: String.fromCharCode(i)
				}));
			}

			this.letters.on('change:guessed', this.checkForEndgame, this)
		},

		checkForEndgame: function () {
			if (this.hasWon()) {
				this.trigger('win');
			} else if (this.hasLost()) {
				this.trigger('lose');
			}
		},

		countMisses: function () {
			var word = this.get('word');
			return this.letters.filter(function (letter) {
				if (letter.get('guessed') !== true) {
					return false;
				}

				return word.indexOf(letter.get('character')) === -1;
			}, this).length;
		},

		hasWon: function () {
			var word = this.get('word');
			var guessed = this.letters.reduce(function (memo, letter) {
				var isGuessed = letter.get('guessed') === true;
				return memo + (isGuessed ? letter.get('character') : '');
			}, '');

			var regex = new RegExp('[' + guessed + ']', 'gi');
			word = word.replace(regex, '');

			return word.length === 0;
		},

		hasLost: function () {
			return this.countMisses() > this.maxMisses;
		}
	});

	return Game;
});