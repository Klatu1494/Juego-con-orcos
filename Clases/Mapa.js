class Mapa {
	constructor(arrayDeStrings, camaraInicial) {
		if (camaraInicial instanceof Coordenadas2D) {
			this.hexagonos = [];
			for (let y = 0; y < arrayDeStrings.length; y++) {
				let string = arrayDeStrings[y];
				this.hexagonos.push([]);
				if (typeof string === 'string')
					for (let x = 0; x < string.length; x++) {
						let char = string[x];
						let tipo;
						if (char === ' ') tipo = null;
						else
							for (tipo in TIPOS_DE_HEXAGONO) {
								if (char === TIPOS_DE_HEXAGONO[tipo].char) {
									tipo = TIPOS_DE_HEXAGONO[tipo];
									break;
								}
								tipo = null;
							}
						this.hexagonos[y].push(new Hexagono(new Coordenadas2D(x, y), tipo));
					}
				else throw new Error();
			}
			this.camara = camaraInicial;
			Mapa.mapas.push(this);
		} else throw new Error();
	}

	dibujar() {
		this.dibujante.dibujar(this);
	}
}

Mapa.prototype.dibujante = new DibujanteDeMapas(LADO_INICIAL_HEXAGONO);
Mapa.mapas = [];