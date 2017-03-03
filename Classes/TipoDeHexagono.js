class TipoDeHexagono {
	constructor(char, costoDeMovimiento, sePuedeEntrar, color, recurso, maxTrabajadores) {
		if (typeof sePuedeEntrar === 'boolean' && typeof char === 'string' && char.length === 1 && typeof color === 'string' && color.match(/^[0-9a-f]{6}$/i) && (typeof recurso === 'string' || typeof recurso === 'undefined')) {
			costoDeMovimiento = parseFloat(costoDeMovimiento);
			if (!isFinite(costoDeMovimiento) || costoDeMovimiento < 0) throw new Error();
			if (typeof recurso === 'string') {
				maxTrabajadores = parseInt(maxTrabajadores);
				if (!isFinite(maxTrabajadores) || maxTrabajadores <= 0) throw new Error();
			}
			this.char = char;
			this.costoDeMovimiento = costoDeMovimiento;
			this.sePuedeEntrar = sePuedeEntrar;
			this.color = '#' + color;
			this.recurso = recurso;
			this.maxTrabajadores = maxTrabajadores;
			TipoDeHexagono.tipos.push(this);
		} else throw new Error();
	}
}

TipoDeHexagono.tipos = []