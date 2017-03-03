class DibujanteDeMapas {
	constructor(ladoInicial) {
		ladoInicial = parseFloat(ladoInicial);
		if (isFinite(ladoInicial)) {
			this._lado = ladoInicial;
			this.ancho = 2 * ladoInicial;
			this.altura = Math.sqrt(3) * ladoInicial;
			let canvasFondo = document.createElement('canvas');
			canvasFondo.width = WIDTH;
			canvasFondo.height = HEIGHT;
			let canvasFrente = document.createElement('canvas');
			canvasFrente.width = WIDTH;
			canvasFrente.height = HEIGHT;
			document.getElementById('container').appendChild(canvasFondo);
			document.getElementById('container').appendChild(canvasFrente);
			this.ctxFondo = canvasFondo.getContext('2d');
			this.ctxFrente = canvasFrente.getContext('2d');
		} else throw new Error();
	}

	get lado() {
		return this._lado;
	}

	set lado(numero) {
		this._lado = numero;
		this.ancho = 2 * numero;
		this.altura = Math.sqrt(3) * numero;
	}

	dibujar(mapa) {
		this.ctxFondo.clearRect(0, 0, WIDTH, HEIGHT);
		if (mapa instanceof Mapa) {
			for (let arrayDeHexagonos of mapa.hexagonos)
				for (let hexagono of arrayDeHexagonos) {
					if (hexagono.tipo) {
						let centroX = hexagono.coordenadas.x * this.ancho * 0.75 - mapa.camara.x;
						let centroY = hexagono.coordenadas.y * this.altura / 2 - mapa.camara.y
							//coloreo los hexagonos
						this.ctxFondo.fillStyle = hexagono.tipo.color;
						this.ctxFondo.beginPath();
						this.ctxFondo.moveTo(centroX + this.ancho / 2, centroY);
						this.ctxFondo.lineTo(centroX + this.lado / 2, centroY + this.altura / 2);
						this.ctxFondo.lineTo(centroX - this.lado / 2, centroY + this.altura / 2);
						this.ctxFondo.lineTo(centroX - this.ancho / 2, centroY);
						this.ctxFondo.lineTo(centroX - this.lado / 2, centroY - this.altura / 2);
						this.ctxFondo.lineTo(centroX + this.lado / 2, centroY - this.altura / 2);
						this.ctxFondo.fill();
					}
				}
			this.actualizarMapa(mapa);
		} else throw new Error();
	}

	actualizarMapa(mapa) {

	}
}