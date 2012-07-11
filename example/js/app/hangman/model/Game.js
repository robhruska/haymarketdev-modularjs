define([
    'hangman/model/Letter'
], function (Letter) {

    var Game = Backbone.Model.extend({

	initialize: function (attrs) {
	    this.letters = new Backbone.Collection();
	    for (var i = 97; i <= 122; i++) {
		var letter = new Letter({
		    character: String.fromCharCode(i)
		});
		this.letters.add(letter);
	    }
	}
    });

    return Game;
});