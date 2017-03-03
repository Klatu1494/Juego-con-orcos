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
		console.log(coordenadasAproximadas);
	}
}