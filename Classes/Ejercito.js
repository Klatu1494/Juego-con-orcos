class Ejercito {
	constructor(unidades, img) {
		this.posicion = null;
		this.cantDeUnidades = new Map();
		for (let unidad of unidades) {
			if (unidad instanceof Unidad) {
				let cant = this.unidades.get(unidad.tipo);
				if (cant) this.unidades.set(unidad.tipo, cant + 1);
				else this.unidades.set(unidad.tipo, 1)
			} else throw new Error();
		}
		if (img instanceof HTMLImageElement) this.img = img;
		else throw new Error();
		Ejercito.ejercitos.push(this);
	}

	agregarUnidades(tipo, cantidad) {
		cantidad = parseInt(cantidad);
		if (tipo instanceof TipoDeUnidad && typeof cantidad === 'number') this.cantDeUnidades.set(tipo, (this.cantDeUnidades.get(tipo) || 0) + cantidad);
		else throw new Error();
		return this;
	}

	moverA(coordenadas) {
		if (coordenadas instanceof Coordenadas) {
			juego.pathfinder.encontrarCaminoA(this, coordenadas);
			let hexagonoObjetivo = juego.pathfinder.caminoMasCortoEncontrado[0];
			if (hexagonoObjetivo.contenido) {
				juego.modo = 'batalla';
				juego.entrarAMapa(mapaDePrueba.vaciar().agregarEjercitos([this, hexagonoObjetivo.contenido]));
			} else {
				juego.mapaActual.hexagonos[this.posicion.y][this.posicion.x].contenido = null;
				this.posicion = juego.pathfinder.caminoMasCortoEncontrado[0].coordenadas;
				juego.mapaActual.hexagonos[this.posicion.y][this.posicion.x].contenido = this;
				juego.dibujante.actualizar();
			}
		} else throw new Error();
	}
}

Ejercito.ejercitos = [null];