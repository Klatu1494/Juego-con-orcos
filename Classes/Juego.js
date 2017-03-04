class Juego {
	constructor() {
		this.nivelActual = -1;
		this.modo = 'mapa';
		this.mapaActual = null;
		this.pathfinder = new Pathfinder();
		this.dibujante = new DibujanteDeMapas(LADO_INICIAL_HEXAGONOS);
	}

	pasarDeNivel() {
		this.nivelActual++;
		this.entrarANivel(this.nivelActual);
	}

	entrarANivel(nivel) {
		if (typeof nivel === 'number') {
			this.nivelActual = nivel;
			this.mapaActual = Mapa.niveles[nivel];
			this.dibujante.dibujar();
		} else throw new Error()
	}

	entrarAMapa(coordenadas) {
		if (coordenadas instanceof Coordenadas2D) {
			this.mapaActual = this.mapaActual.mapas[coordenadas.y][coordenadas.x];
			this.dibujante.dibujar();
		} else throw new Error()
	}
}