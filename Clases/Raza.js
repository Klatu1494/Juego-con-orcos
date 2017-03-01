class Raza {
	constructor(nombre, descripcion, arrayDeClases) {
		if (typeof nombre === 'string' && typeof descripcion === 'string') {
			this.clases = [];
			for (let clase of arrayDeClases) {
				if (clase instanceof Clase) this.clases.push(clase);
				else throw new Error();
			}
			this.nombre = nombre;
			this.descripcion = descripcion
			Raza.razas.set(nombre, this);
		} else throw new Error();
	}
}

Raza.razas = new Map();