class Hexagono {
	constructor(coordenadas, tipo) {
		if (coordenadas instanceof Coordenadas2D && (tipo instanceof TipoDeHexagono || tipo === null)) {
			this.coordenadas = coordenadas;
			this.tipo = tipo;
			this.contenido = null;
		} else throw new Error();
	}
}