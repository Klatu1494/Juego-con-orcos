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
						let posicion = new Coordenadas2D(x, y);
						if (char === ' ') {
							tipo = null;
							contenido = null;
						} else {
							let resultado = Mapa.decodificarChar(char);
							tipo = resultado.tipoDeHexagono;
							contenido = resultado.ejercitoOTipoDeUnidad;
							if (contenido) {
								if (contenido instanceof Ejercito) contenido.posicion = posicion;
								else contenido = new Unidad(posicion, contenido);
							}
						}
						this.hexagonos[y].push(new Hexagono(new Coordenadas2D(x, y), tipo, contenido, this));
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
			let charCode = char.charCodeAt(0) - 0xFF;
			let maskTerreno = Math.pow(2, BITS_TERRENO) - 1;
			let maskEjercitoOTipoDeUnidad = (Math.pow(2, BITS_EJERCITO_O_TIPO_DE_UNIDAD) - 1) << BITS_TERRENO;
			let tipoDeHexagono = TipoDeHexagono.tipos[charCode & maskTerreno];
			let ejercitoOTipoDeUnidad = juego.modo === 'mapa' ? Ejercito.ejercitos[charCode & maskEjercitoOTipoDeUnidad] : TipoDeUnidad.tipos[charCode & maskEjercitoOTipoDeUnidad];
			return {
				tipoDeHexagono: tipoDeHexagono,
				ejercitoOTipoDeUnidad: ejercitoOTipoDeUnidad
			};
		}
		throw new Error();
	}
}

Mapa.mapas = [];