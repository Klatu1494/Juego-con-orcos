class Arma {
	constructor(nombre, stats, showTooltip) {
		if (typeof nombre === 'string' && typeof showTooltip === 'boolean' && stats instanceof Object && typeof stats.tipoDeDaño === 'string' && stats.costo instanceof Costo) {
			stats.dañoMin = parseInt(stats.dañoMin);
			stats.dañoMax = parseInt(stats.dañoMax);
			if (isFinite(stats.dañoMin) && isFinite(stats.dañoMax) && stats.dañoMin <= stats.dañoMax) {
				this.nombre = nombre;
				this.dañoMin = stats.dañoMin;
				this.dañoMax = stats.dañoMax;
				this.tipoDeDaño = stats.tipoDeDaño;
				this.costo = stats.costo;
				this.showTooltip = showTooltip;
				Arma.armas.set(nombre, this);
			}
		} else throw new Error();
	}

	daño() {
		return this.dañoMin + Math.floor(Math.random() * (this.dañoMax - this.dañoMin + 1));
	}
}

Arma.armas = new Map();