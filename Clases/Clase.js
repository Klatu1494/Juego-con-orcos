class Clase {
	constructor(nombre, vida, mana, costo) {
		vida = parseInt(vida);
		mana = parseInt(mana);
		if (typeof nombre === 'string' && isFinite(vida) && isFinite(mana) && costo instanceof Costo) {
			this.vida = vida;
			this.mana = mana;
			this.costo = costo;
		} else throw new Error();
	}
}