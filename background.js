// The amount of circles we want to make:
var count = 150;

// Create a symbol, which we will use to place instances of later:

var rectangle = new Rectangle(new Point(7.5, 7.5), new Point(18, 12));
var cornerSize = new Size(2, 2);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'cyan';

var symbol = new Symbol(path);

for (var i = 0; i < count; i++) {
	var center = Point.random() * view.size;
	var placedRectangle = symbol.place(center);
	placedRectangle.scale(i / count);
}

function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		item.position.x += item.bounds.width / 15;

		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
}