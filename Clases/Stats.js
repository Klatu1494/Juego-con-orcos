class Stats {
	constructor(tipoDeUnidad) {
		if (tipoDeUnidad instanceof TipoDeUnidad) {
			this.vidaMaxima = tipoDeUnidad.vida;
			this.vidaRestante = tipoDeUnidad.vida;
			this.ataque = tipoDeUnidad.ataque;
			this.ataqueDeRango = tipoDeUnidad.ataqueDeRango;
		} else throw new Error();
	}
}