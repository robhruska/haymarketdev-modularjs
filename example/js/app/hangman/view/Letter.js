define(function () {

	var Letter = Backbone.View.extend({

		tagName: 'li',
		className: 'letter',

		initialize: function (options) {
			this.model.on('change:guessed', this.setGuessed, this);
		},

		events: {
			'click a': 'handleClick'
		},

		render: function () {
			var text = this.model.get('character');
			this.$el.append('<a href="#">' + text + '</a>');

			this.setGuessed();
			return this;
		},

		handleClick: function (e) {
			this.model.set('guessed', true);
			return false;
		},

		setGuessed: function () {
			this.$el.toggleClass('guessed', this.model.get('guessed'));
		}
	});

	return Letter;
});