class InputHandler {
	constructor(dibujante) {
		if (dibujante instanceof DibujanteDeMapas) this.dibujante = dibujante;
		else throw new Error();
	}

	clickHandler(event) {
		let puntoClickeado = new Coordenadas2D(event.clientX, event.clientY);
		let coordenadasExactas = new Coordenadas2D(
			(puntoClickeado.x + juego.mapaActual.camara.x - this.dibujante.ancho / 2) / (this.dibujante.ancho / 2 + this.dibujante.lado / 2),
			(puntoClickeado.y + juego.mapaActual.camara.y - this.dibujante.altura / 2) / (this.dibujante.altura / 2)
		);
		let coordenadasAproximadas = new Coordenadas2D(
			Math.round(coordenadasExactas.x),
			Math.round(coordenadasExactas.y)
		);
		let posiblesHexagonosClickeados = []
		if (
			juego.mapaActual.hexagonos[coordenadasAproximadas.y] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x]);
		if (
			juego.mapaActual.hexagonos[coordenadasAproximadas.y + 1] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(juego.mapaActual.hexagonos[coordenadasAproximadas.y + 1][coordenadasAproximadas.x]);
		if (
			juego.mapaActual.hexagonos[coordenadasAproximadas.y - 1] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x].tipo
		) posiblesHexagonosClickeados.push(juego.mapaActual.hexagonos[coordenadasAproximadas.y - 1][coordenadasAproximadas.x]);
		if (
			juego.mapaActual.hexagonos[coordenadasAproximadas.y] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1].tipo
		) posiblesHexagonosClickeados.push(juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x + 1]);
		if (
			juego.mapaActual.hexagonos[coordenadasAproximadas.y] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1] &&
			juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1].tipo
		) posiblesHexagonosClickeados.push(juego.mapaActual.hexagonos[coordenadasAproximadas.y][coordenadasAproximadas.x - 1]);
		for (let hexagono of posiblesHexagonosClickeados) {
			console.log(juego.mapaActual.hexagonos[2][14]);
			if (hexagono.contiene(coordenadasExactas, false).info === 'El punto está dentro del polígono.') {
				Ejercito.ejercitos[1].moverA(hexagono.coordenadas);
				break;
			}
		}
	}
}