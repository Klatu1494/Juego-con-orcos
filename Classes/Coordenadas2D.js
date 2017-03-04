class Coordenadas2D extends Coordenadas {
	constructor(x, y) {
		x = parseFloat(x);
		y = parseFloat(y);
		super([x, y]);
		this.x = x;
		this.y = y;
	}

	distanciaAlCuadradoA(punto) {
		return Math.pow(this.x - punto.x, 2) + Math.pow(this.y - punto.y, 2)
	}

	distanciaA(objeto) {
		if (objeto instanceof Segmento) {
			let a = this.x - objeto.p.x;
			let b = this.y - objeto.p.y;
			let c = objeto.q.x - objeto.p.x;
			let d = objeto.q.y - objeto.p.y;
			let dot = a * c + b * d;
			let longitudAlCuadrado = Math.pow(c, 2) + Math.pow(d, 2);
			let param = -1;
			if (longitudAlCuadrado) param = dot / longitudAlCuadrado;
			let puntoMasCercano;
			if (param < 0) puntoMasCercano = objeto.p;
			else if (1 < param) puntoMasCercano = objeto.q;
			else puntoMasCercano = new Coordenadas2D(objeto.p.x + param * c, objeto.p.y + param * d);
			return {
				distanciaAlCuadrado: this.distanciaAlCuadradoA(puntoMasCercano),
				puntoMasCercano: puntoMasCercano
			};
		}
		throw new Error();
	}
}