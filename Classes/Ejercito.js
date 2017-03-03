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

	moverA(hexagono) {
		if (hexagono instanceof Hexagono) {

		} else throw new Error();
	}
}

Ejercito.ejercitos = [null];