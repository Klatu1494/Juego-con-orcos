class Clase {
	constructor(nombre, vida, mana, oro, madera, comida) {
		vida = parseInt(vida);
		mana = parseInt(mana);
		if (typeof nombre === 'string' && isFinite(vida) && isFinite(mana)) {
			this.vida = vida;
			this.mana = mana;
			this.costo = new Costo(oro, madera, comida);
		} else throw new Error();
	}
}