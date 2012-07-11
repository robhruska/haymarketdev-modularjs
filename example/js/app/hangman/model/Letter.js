define(function () {
	var Letter = Backbone.Model.extend({
		defaults: {
			guessed: false
		}
	});

	return Letter;
});