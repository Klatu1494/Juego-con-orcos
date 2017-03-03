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
						let contenido;
						let jugador;
						if (char === ' ') {
							tipo = null;
							contenido = null;
							jugador = null;
						} else {
							let resultado = Mapa.decodificarChar(char);
							tipo = resultado.tipoDeHexagono;
							contenido = resultado.tipoDeUnidad;
							jugador = resultado.jugador;
						}
						this.hexagonos[y].push(new Hexagono(new Coordenadas2D(x, y), tipo, contenido, jugador, this));
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

	static decodificarChar(char) {
		if (typeof char === 'string') {
			let charCode = char.charCodeAt(0) - Math.pow(2, 15) + 1;
			let maskTerreno = Math.pow(2, BITS_TERRENO) - 1;
			let maskUnidadOEjercito = (Math.pow(2, BITS_UNIDAD_O_EJERCITO) - 1) << BITS_TERRENO;
			let maskJugador = (Math.pow(2, BITS_JUGADOR) - 1) << (BITS_UNIDAD_O_EJERCITO + BITS_TERRENO);
			let tipoDeHexagono = charCode & maskTerreno;
			let tipoDeUnidadO = charCode & maskTerreno;
			let tipoDeHexagono = charCode & maskTerreno;
			return {
				tipoDeHexagono: TipoDeHexagono.tipos[tipoDeHexagono],
				tipoDeUnidad: TipoDeUnidad.tipos[tipoDeUnidad],
				jugador: null
			};
		}
		throw new Error();
	}
}

Mapa.mapas = [];