class Raza {
	constructor(nombre, descripcion, arrayDeTipos) {
		if (typeof nombre === 'string' && typeof descripcion === 'string') {
			this.tipos = [];
			for (let tipo of arrayDeTipos) {
				if (tipo instanceof TipoDeUnidad) this.tipos.push(tipo);
				else throw new Error();
			}
			this.nombre = nombre;
			this.descripcion = descripcion
			Raza.razas.set(nombre, this);
		} else throw new Error();
	}
}

Raza.razas = new Map();