define(function () {

	var Answer = Backbone.View.extend({
		tagName: 'ol',
		className: 'answer',

		initialize: function (options) {
			this.model.letters.on('change:guessed', this.update, this);
			this.model.on('win', this.handleWin, this);
			this.model.on('lose', this.handleLoss, this);
		},

		render: function () {
			this.update();
			return this;
		},

		update: function () {
			this.$el.find('li').remove();

			var word = this.model.get('word');
			var self = this;
			$.map(word.split(''), function (c) {
				var li = $('<li>');
				if (self.model.hasGuessed(c)) {
					console.log('true');
					li.text(c);
				}
				self.$el.append(li);
			});
		},

		handleWin: function () {
			this.$el.addClass('win');
		},

		handleLoss: function () {
			this.$el.addClass('lose');
		}
	});

	return Answer;
});