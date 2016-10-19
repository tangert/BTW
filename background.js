// The amount of circles we want to make:
var count = 150;

var rectangle = new Rectangle(new Point(7.5, 7.5), new Point(12, 12));
var cornerSize = new Size(2, 2);
var path = new Path.RoundRectangle(rectangle, cornerSize);
path.fillColor = 'pink';

var symbol = new Symbol(path);

for (var i = 0; i < count; i++) {
	var center = Point.random() * view.size;
	var placedRectangle = symbol.place(center);
	placedRectangle.scale(i / count);
}

function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		item.position.y += item.bounds.height / 15;

		if (item.bounds.top > view.size.height) {
			item.position.y = -item.bounds.height;
		}
	}
}