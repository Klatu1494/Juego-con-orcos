class Armadura {
	constructor(nombre, stats, showTooltip) {
		if (typeof nombre === 'string' && typeof showTooltip === 'boolean' && stats instanceof Object && typeof stats.tipo === 'string' && stats.costo instanceof Costo) {
			stats.armadura = parseFloat(stats.armadura);
			if (isFinite(stats.armadura)) {
				this.nombre = nombre;
				this.armadura = stats.armadura;
				this.tipo = stats.tipo;
				this.costo = stats.costo;
				this.showTooltip = showTooltip;
				Armadura.armaduras.set(nombre, this);
			}
		} else throw new Error();
	}
}

Armadura.armaduras = new Map();