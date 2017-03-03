class Unidad {
	constructor(posicion, tipo) {
		if (posicion instanceof Coordenadas2D && tipo instanceof TipoDeUnidad) {
			this.stats = new Stats(TipoDeUnidad);
			this.tipo = tipo;
			this.posicion = posicion;
			this.img = tipo.img;
		} else throw new Error();
	}

	moverA() {

	}
}