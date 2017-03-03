class Ejercito {
	constructor(unidades) {
		this.posicion = null;
		this.cantDeUnidades = new Map();
		for (let unidad of unidades) {
			if (unidad instanceof Unidad) {
				let cant = this.unidades.get(unidad.tipo);
				if (cant) this.unidades.set(unidad.tipo, cant + 1);
				else this.unidades.set(unidad.tipo, 1)
			} else throw new Error();
		}
		Ejercito.ejercitos.push(this);
	}
}

Ejercito.ejercitos = [null];