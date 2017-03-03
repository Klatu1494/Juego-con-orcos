class Hexagono {
	constructor(coordenadas, tipo, contenido, jugador, mapa) {
		console.log(mapa)
		if (coordenadas instanceof Coordenadas2D && (tipo instanceof TipoDeHexagono || tipo === null) && jugador === null && mapa instanceof Mapa) {
			this.coordenadas = coordenadas;
			this.tipo = tipo;
			this.contenido = (contenido instanceof TipoDeUnidad) ? new Unidad(coordenadas, contenido) : null;
			this.mapa = mapa;
			this.hexagonosAdyancentes = new Set();
			if (mapa.hexagonos[coordenadas.y - 2] && mapa.hexagonos[coordenadas.y - 2][coordenadas.x]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y - 2][coordenadas.x]);
			if (mapa.hexagonos[coordenadas.y - 1] && mapa.hexagonos[coordenadas.y - 1][coordenadas.x - 1]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y - 1][coordenadas.x - 1]);
			if (mapa.hexagonos[coordenadas.y] && mapa.hexagonos[coordenadas.y][coordenadas.x - 2]) this.esAdyancenteCon(mapa.hexagonos[coordenadas.y][coordenadas.x - 2]);
		} else console.log(coordenadas, tipo, contenido, jugador, mapa);
	}

	esAdyancenteCon(hexagono) {
		if (hexagono instanceof Hexagono) {
			this.hexagonosAdyancentes.add(hexagono);
			hexagono.hexagonosAdyancentes.add(this);
		} else throw new Error();
	}
}