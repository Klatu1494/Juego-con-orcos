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
			this.mapas = [];
			for (let i = 0; i < this.hexagonos.length; i++) {
				this.mapas.push([]);
				for (let j = 0; j < this.hexagonos[i].length; j++) this.mapas[i].push(mapaDePrueba);
			}
		} else throw new Error();
	}

	vaciar() {
		for (let arrayDeHexagonos of this.hexagonos)
			for (let hexagono of arrayDeHexagonos) hexagono.contenido = null;
		return this;
	}

	agregarEjercitos(ejercitos) {
		if (ejercitos instanceof Array && ejercitos.length === 2) {
			if (ejercitos[0] instanceof Ejercito) {

			} else throw new Error();
		} else throw new Error();
	}

	static decodificarChar(char) {
		if (typeof char === 'string') {
			let charCode = char.charCodeAt(0) - 0xFF;
			let tipoDeHexagono = TipoDeHexagono.tipos[charCode & this.maskTerreno];
			let ejercitoOTipoDeUnidad = juego.modo === 'mapa' ? Ejercito.ejercitos[(charCode & this.maskEjercitoOTipoDeUnidad) >> BITS_TERRENO] : TipoDeUnidad.tipos[(charCode & this.maskEjercitoOTipoDeUnidad) >> BITS_TERRENO];
			return {
				tipoDeHexagono: tipoDeHexagono,
				ejercitoOTipoDeUnidad: ejercitoOTipoDeUnidad
			};
		}
		throw new Error();
	}
}

Mapa.niveles = [];
Mapa.maskTerreno = Math.pow(2, BITS_TERRENO) - 1;
Mapa.maskEjercitoOTipoDeUnidad = (Math.pow(2, BITS_EJERCITO_O_TIPO_DE_UNIDAD) - 1) << BITS_TERRENO;