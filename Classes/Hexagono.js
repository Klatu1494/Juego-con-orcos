class Hexagono extends Poligono {
	constructor(coordenadas, tipo, contenido, mapa) {
		if (coordenadas instanceof Coordenadas2D && (tipo instanceof TipoDeHexagono || tipo === null) && mapa instanceof Mapa) {
			let lado = 2 / 3;
			let ancho = 2 * lado;
			let altura = 2;
			super([
				new Coordenadas2D(coordenadas.x + ancho / 2, coordenadas.y),
				new Coordenadas2D(coordenadas.x + lado / 2, coordenadas.y + altura / 2),
				new Coordenadas2D(coordenadas.x - lado / 2, coordenadas.y + altura / 2),
				new Coordenadas2D(coordenadas.x - ancho / 2, coordenadas.y),
				new Coordenadas2D(coordenadas.x - lado / 2, coordenadas.y - altura / 2),
				new Coordenadas2D(coordenadas.x + lado / 2, coordenadas.y - altura / 2),
			]);
			this.coordenadas = coordenadas;
			this.tipo = tipo;
			this.contenido = contenido;
			this.mapa = mapa;
			this.hexagonosAdyacentes = [];
			if (mapa.hexagonos[coordenadas.y - 2] && mapa.hexagonos[coordenadas.y - 2][coordenadas.x]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y - 2][coordenadas.x]);
			if (mapa.hexagonos[coordenadas.y - 1] && mapa.hexagonos[coordenadas.y - 1][coordenadas.x + 1]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y - 1][coordenadas.x + 1]);
			if (mapa.hexagonos[coordenadas.y - 1] && mapa.hexagonos[coordenadas.y - 1][coordenadas.x - 1]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y - 1][coordenadas.x - 1]);
		} else throw new Error();
	}

	esAdyancenteCon(hexagono) {
		if (hexagono instanceof Hexagono) {
			this.hexagonosAdyacentes.push(hexagono);
			hexagono.hexagonosAdyacentes.push(this);
		} else throw new Error();
	}
}