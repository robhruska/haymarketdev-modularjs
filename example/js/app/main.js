require([
	'hangman/model/Game',
	'hangman/view/Board'
], function (Game, Board) {

	var game = new Game('jabberwock');

	var board = new Board({
		model: game
	});

	$('body').append(board.render().el);
});