class TipoDeUnidad {
	constructor(nombre, clase, arma, armadura, escudo) {
		if (typeof nombre === 'string' && clase instanceof Clase && arma instanceof Arma && escudo instanceof Escudo && armadura instanceof Armadura) {
			this.nombre = nombre;
			this.stats = new Stats(clase, arma, armadura, escudo);
			this.zurdo = Math.random() < 0.13;
			this.costo = clase.costo.sumarCosto(arma.costo).sumarCosto(armadura.costo).sumarCosto(escudo.costo);
		}
	}
}