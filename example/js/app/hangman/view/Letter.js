define(function () {

    var Letter = Backbone.View.extend({

	initialize: function (options) {
	    this.model.on('change:guessed', this.setGuessed, this);
	},

	render: function () {
	    this.$el.text(this.model.get('character'));
	    this.setGuessed();

	    return this;
	},

	setGuessed: function () {
	    this.$el.toggleClass('guessed', this.model.get('guessed'));
	}
    });

    return Letter;
});