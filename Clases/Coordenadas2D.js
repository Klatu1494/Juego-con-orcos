class Coordenadas2D extends Coordenadas {
	constructor(x, y) {
		x = parseFloat(x);
		y = parseFloat(y);
		super([x, y]);
		this.x = x;
		this.y = y;
	}
}