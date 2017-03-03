class Unidad {
	constructor(posicion, tipo) {
		if (posicion instanceof Coordenadas2D && tipo instanceof TipoDeUnidad) {
			unidad.stats = new Stats(TipoDeUnidad);
			unidad.posicion = posicion;
		} else throw new Error();
		Unidad.unidades.add(this);
	}

	moverA() {

	}
}

Unidad.unidades = new Set();