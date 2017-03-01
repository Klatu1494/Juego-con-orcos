class Stats {
	constructor(clase, arma, armadura, escudo) {
		if (clase instanceof Clase && arma instanceof Arma && escudo instanceof Escudo && armadura instanceof Armadura) {
			this.vidaMaxima = clase.vida;
			this.vidaRestante = clase.vida;
			this.manaMaximo = clase.mana;
			this.manaRestante = clase.mana;
			this.arma = arma;
			this.armadura = armadura;
			this.escudo = escudo;
		} else throw new Error();
	}
}