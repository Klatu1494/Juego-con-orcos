class Segmento {
	constructor(p, q) {
		if (p instanceof Coordenadas2D && q instanceof Coordenadas2D) {
			this.p = p;
			this.q = q;
		} else throw new Error();
	}
}