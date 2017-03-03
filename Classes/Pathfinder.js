class Pathfinder {
	constructor() {
		this.costoMin = Infinity;
		this.mapaActual = null;
		for (let tipo of TipoDeHexagono.tipos) this.costoMin = Math.min(this.costoMin, tipo.costoDeMovimiento);
	}

	encontrarCaminoA(ejercitoOUnidad, coordenadas) {
		this.costoDelCaminoMasCortoEncontrado = Infinity;
		this.caminoMasCortoEncontrado = null;
		if (coordenadas instanceof Coordenadas2D && (ejercitoOUnidad instanceof Unidad || ejercitoOUnidad instanceof Ejercito) && this.mapaActual) {
			for (let hexagonos of this.mapaActual.hexagonos) {
				hexagono.costoMinEncontrado = null;
				hexagono.costoMinPosible = null;
				hexagono.noChequear = false;
			}
			return this.encontrarCamino(unidad.posicion, coordenadas, 0, [], []);
		} else throw new Error();
	}

	encontrarCamino(desde, hasta, costo, camino, hexagonosAdyacentes) {
		hexagonosAdyacentes = hexagonosAdyacentes.concat(this.mapaActual.hexagonos[desde.y][desde.x].hexagonosAdyacentes);
		let hexagonosAdyacentesAOrdenar = [];
		for (let hexagono of hexagonosAdyacentes) {
			let minCoordenadaDeLaDistancia = Math.min(Math.abs(hexagono.coordenadas.x - hasta.x), Math.abs(hexagono.coordenadas.y - hasta.y));
			let maxCoordenadaDeLaDistancia = Math.max(Math.abs(hexagono.coordenadas.x - hasta.x), Math.abs(hexagono.coordenadas.y - hasta.y));
			if (hexagono.noChequear || hexagono.costoMinEncontrado && hexagono.costoMinEncontrado < costo + hexagono.tipo.costoDeMovimiento || !hexagono.tipo.sePuedeEntrar) {
				hexagono.noChequear = true;
				continue;
			}
			hexagono.costoMinEncontrado = costo + hexagono.tipo.costoDeMovimiento;
			if (hexagono.coordenadas.x === hasta.x && hexagono.coordenadas.y === hasta.y && hexagono.costoMinEncontrado < this.costoDelCaminoMasCortoEncontrado) {
				this.costoDelCaminoMasCortoEncontrado = hexagono.costoMinEncontrado;
				this.caminoMasCortoEncontrado = camino.concat([hexagono]);
				return;
			}
			hexagono.costoMinPosible = this.costoMin * (minCoordenadaDeLaDistancia + (maxCoordenadaDeLaDistancia - minCoordenadaDeLaDistancia) * (Math.abs(hexagono.coordenadas.x - hasta.x) < Math.abs(hexagono.coordenadas.y - hasta.y) ? 0.75 : 0.5)) + hexagono.costoMinEncontrado;
			hexagonosAdyacentesAOrdenar.push(hexagono);
		}
		hexagonosAdyacentesAOrdenar.sort(this.sortByMinCost);
		for (let hexagono of hexagonosAdyacentesAOrdenar) {
			let nuevoCosto = costo + hexagono.tipo.costoDeMovimiento;
			let nuevoCamino = camino.concat([hexagono]);
			this.encontrarCamino(hexagono.coordenadas, hasta, nuevoCosto, nuevoCamino, hexagonosAdyacentesAOrdenar);
		}
	}

	sortByMinCost(a, b) {
		return a.costoMinPosible - b.costoMinPosible;
	}
}