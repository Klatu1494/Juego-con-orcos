class TipoDeUnidad {
	constructor(nombre, vida, ataque, ataqueDeLejos, costo, img) {
		vida = parseInt(vida);
		ataque = parseInt(ataque);
		ataqueDeLejos = parseInt(ataqueDeLejos);
		if (typeof nombre === 'string' && isFinite(vida) && isFinite(ataque) && isFinite(ataqueDeLejos) && costo instanceof Costo && img instanceof HTMLImageElement) {
			this.nombre = nombre;
			this.vida = vida * 7;
			this.ataque = ataque;
			this.ataqueDeLejos = ataqueDeLejos;
			this.costo = costo;
			this.img = img;
			TipoDeUnidad.tipos.push(this);
		} else throw new Error();
	}
}

TipoDeUnidad.tipos = [null]