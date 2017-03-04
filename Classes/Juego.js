class Juego {
	constructor() {
		this.modo = 'mapa';
		this.mapaActual = null;
		this.pathfinder = new Pathfinder();
		this.dibujante = new DibujanteDeMapas(LADO_INICIAL_HEXAGONOS);
	}

	entrarAMapa(mapa) {
		if (mapa instanceof Mapa) {
			this.mapaActual = mapa;
			this.dibujante.dibujar();
		}
	}
}