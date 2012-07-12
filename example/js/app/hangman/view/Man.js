define(function () {

	var Man = Backbone.View.extend({
		tagName: 'canvas',

		initialize: function (options) {
			this.model.letters.on('change:guessed', this.update, this);
			this.onPart = 0;
		},

		render: function () {
			this.$el.attr('width', 400).attr('height', 400);
			this.canvas = this.el.getContext('2d');

			this.drawGallows();
			return this;
		},

		update: function () {
			var misses = this.model.countMisses();
			if (misses > this.onPart) {
				this.drawPart(misses);
				this.onPart = misses;
			}
		},

		drawGallows: function () {
			var c = this.canvas;
			c.beginPath();
			c.moveTo(50, 350);
			c.lineTo(350, 350);
			c.stroke();

			c.beginPath();
			c.moveTo(275, 350);
			c.lineTo(275, 50);
			c.lineTo(175, 50);
			c.lineTo(175, 75);
			c.stroke();
		},

		drawPart: function (number) {
			switch (number) {
				case 1: this.drawHead(); break;
				case 2: this.drawBody(); break;
				case 3: this.drawArms(); break;
				case 4: this.drawLegs(); break;
				case 5: this.drawFace(); break;
			default:
				break;
			}
		},

		drawHead: function () {
			var c = this.canvas;
			c.beginPath();
			c.arc(175, 100, 25, 0, 2 * Math.PI, false);
			c.stroke();
		},

		drawBody: function () {
			var c = this.canvas;
			c.beginPath();
			c.moveTo(175, 125);
			c.lineTo(175, 200);
			c.stroke();
		},

		drawArms: function () {
			var c = this.canvas;
			c.beginPath();
			c.moveTo(130, 165);
			c.lineTo(175, 140);
			c.lineTo(220, 165);
			c.stroke();
		},

		drawLegs: function () {
			var c = this.canvas;
			c.beginPath();
			c.moveTo(150, 275);
			c.lineTo(175, 200);
			c.lineTo(200, 275);
			c.stroke();
		},

		drawFace: function () {
			var c = this.canvas;
			c.font = '14px monospace';
			c.fillText('x', 160, 100);
			c.fillText('x', 180, 100);
			c.beginPath();
			c.moveTo(170, 115);
			c.lineTo(180, 115);
			c.stroke();
		}

	});

	return Man;
});