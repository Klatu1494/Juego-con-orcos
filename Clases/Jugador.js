class Jugador {
	constructor(raza, color) {
		if (raza instanceof Raza && typeof color === 'string' && color.match(/^[0-9a-f]{6}$/i)) {

		} else throw new Error();
	}
}