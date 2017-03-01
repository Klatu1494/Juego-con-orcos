class Costo {
	constructor(oro, madera, comida) {
		oro = parseInt(oro);
		madera = parseInt(madera);
		comida = parseInt(comida);
		if (isFinite(oro) && isFinite(madera) && isFinite(comida)) {
			this.oro = oro;
			this.madera = madera;
			this.comida = comida;
		} else throw new Error();
	}
}