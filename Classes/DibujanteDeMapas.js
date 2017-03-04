class DibujanteDeMapas {
	constructor(ladoInicial) {
		ladoInicial = parseFloat(ladoInicial);
		if (isFinite(ladoInicial)) {
			this._lado = ladoInicial;
			this.ancho = 2 * ladoInicial;
			this.altura = Math.sqrt(3) * ladoInicial;
			this.inputHandler = new InputHandler(this);
			let canvasFondo = document.createElement('canvas');
			canvasFondo.width = WIDTH;
			canvasFondo.height = HEIGHT;
			let canvasFrente = document.createElement('canvas');
			canvasFrente.width = WIDTH;
			canvasFrente.height = HEIGHT;
			document.getElementById('container').appendChild(canvasFondo);
			document.getElementById('container').appendChild(canvasFrente);
			canvasFrente.addEventListener('click', this.inputHandler.clickHandler.bind(this.inputHandler));
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

	dibujar() {
		this.ctxFondo.clearRect(0, 0, WIDTH, HEIGHT);
		for (let arrayDeHexagonos of juego.mapaActual.hexagonos)
			for (let hexagono of arrayDeHexagonos) {
				if (hexagono.tipo) {
					let centro = this.calcularCentroDeHexagono(hexagono);
					//coloreo los hexagonos
					this.ctxFondo.fillStyle = hexagono.tipo.color;
					this.ctxFondo.beginPath();
					this.ctxFondo.moveTo(centro.x + this.ancho / 2, centro.y);
					this.ctxFondo.lineTo(centro.x + this.lado / 2, centro.y + this.altura / 2);
					this.ctxFondo.lineTo(centro.x - this.lado / 2, centro.y + this.altura / 2);
					this.ctxFondo.lineTo(centro.x - this.ancho / 2, centro.y);
					this.ctxFondo.lineTo(centro.x - this.lado / 2, centro.y - this.altura / 2);
					this.ctxFondo.lineTo(centro.x + this.lado / 2, centro.y - this.altura / 2);
					this.ctxFondo.fill();
				}
			}
		this.actualizar();
	}

	actualizar() {
		for (let arrayDeHexagonos of juego.mapaActual.hexagonos)
			for (let hexagono of arrayDeHexagonos) this.actualizarHex(hexagono);
	}

	actualizarHex(hexagono) {
		if (hexagono instanceof Hexagono) {
			if (hexagono.tipo) {
				let centro = this.calcularCentroDeHexagono(hexagono);
				this.ctxFrente.clearRect(centro.x - this.lado / 2, centro.y - this.altura / 2, this.lado, this.altura);
				if (hexagono.contenido) this.ctxFrente.drawImage(hexagono.contenido.img, centro.x - this.lado / 2, centro.y - this.altura / 2, this.lado, this.altura);
			}
		} else throw new Error();
	}

	calcularCentroDeHexagono(hexagono) {
		if (hexagono instanceof Hexagono) {
			return new Coordenadas2D(hexagono.coordenadas.x * (this.ancho / 2 + this.lado / 2) - juego.mapaActual.camara.x + this.ancho / 2, hexagono.coordenadas.y * this.altura / 2 - juego.mapaActual.camara.y + this.altura / 2);
		} else throw new Error();
	}
}