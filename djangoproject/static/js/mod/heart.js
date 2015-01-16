define([
	'jquery',
], function( $ ) {

	var pixelSize = 71;

	var maroon = '#ad1d45';
	var amaranth = '#d9195c';
	var cerise = '#d62d75';
	var razzmatazz = '#ee2178';
	var illusion = '#f7b0cf';

	var Heart = function(heart) {
		this.heart = $(heart);
		this.pixels = [
			// Row 1
			{x:1, y: 0, color: maroon},
			{x:2, y: 0, color: amaranth},
			{x:4, y: 0, color: amaranth},
			{x:5, y: 0, color: cerise},

			// Row 2
			{x:0, y: 1, color: amaranth},
			{x:1, y: 1, color: razzmatazz},
			{x:2, y: 1, color: razzmatazz},
			{x:3, y: 1, color: amaranth},
			{x:4, y: 1, color: razzmatazz},
			{x:5, y: 1, color: illusion},
			{x:6, y: 1, color: maroon},

			// Row 3
			{x:0, y: 2, color: cerise},
			{x:1, y: 2, color: amaranth},
			{x:2, y: 2, color: amaranth},
			{x:3, y: 2, color: maroon},
			{x:4, y: 2, color: amaranth},
			{x:5, y: 2, color: cerise},
			{x:6, y: 2, color: maroon},

			// Row 4
			{x:1, y: 3, color: maroon},
			{x:2, y: 3, color: razzmatazz},
			{x:3, y: 3, color: amaranth},
			{x:4, y: 3, color: razzmatazz},
			{x:5, y: 3, color: amaranth},

			// Row 5
			{x:2, y: 4, color: amaranth},
			{x:3, y: 4, color: cerise},
			{x:4, y: 4, color: amaranth},

			// Row 6
			{x:3, y: 5, color: razzmatazz},
		];
		this.init();
	};

	Heart.prototype = {
		init: function() {
			this.draw();
		},
		draw: function() {
			this.pixels.forEach(function (pixel) {
				var element = new Rectangle(pixel).element;
				document.getElementById('pixels').appendChild(element);
			});
		}
	};

	var Rectangle = function (opts) {
	var namespace = 'http://www.w3.org/2000/svg';
		this.element = document.createElementNS(namespace, 'rect');
		this.size = 71;
		this.init(opts);
	};

	Rectangle.prototype = {
		init: function(opts) {
			this.setAttr('x', opts.x * this.size);
			this.setAttr('y', opts.y * this.size);
			this.setAttr('width', this.size);
			this.setAttr('height', this.size);
			this.setAttr('fill', opts.color);
		},
		setAttr: function(name, value) {
			this.element.setAttributeNS(null, name, value);
		}
	};

	// Export a single instance of our module:
	return new Heart('.heart');
});
