class InputHandler {
	constructor(dibujante) {
		if (dibujante instanceof DibujanteDeMapas) this.dibujante = dibujante;
		else throw new Error();
	}

	clickHandler(event) {
		let puntoClickeado = new Coordenadas2D(event.clientX, event.clientY);
		let coordenadasAproximadas = new Coordenadas2D(
			Math.round((puntoClickeado.x + this.dibujante.mapaActual.camara.x - this.dibujante.ancho / 2) / (this.dibujante.ancho / 2 + this.dibujante.lado / 2)),
			Math.round((puntoClickeado.y + this.dibujante.mapaActual.camara.y - this.dibujante.altura / 2) / (this.dibujante.altura / 2))
		);
		let posiblesHexagonosClickeados = []
		if (
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x] &&
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x]);
		if (
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x] &&
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x]);
		if (
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x] &&
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x]);
		if (
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1] &&
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1].tipo
		) posiblesHexagonosClickeados.push(this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1]);
		if (
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1] &&
			this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1].tipo
		) posiblesHexagonosClickeados.push(this.dibujante.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1]);
		for (let hexagono of posiblesHexagonosClickeados)
			if (hexagono.contiene(puntoClickeado)) {
				Ejercito.ejercitos[1].moverA(hexagono.coordenadas);
			}
	}
}