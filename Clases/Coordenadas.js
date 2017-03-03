class Coordenadas {
	constructor(arrayDeCoordenadas) {
		this.coordenadas = [];
		for (let coordenada of arrayDeCoordenadas) {
			coordenada = parseFloat(coordenada);
			if (isFinite(coordenada)) this.coordenadas.push(coordenada);
			else throw new Error();
		}
		this.dimensiones = arrayDeCoordenadas.length;
	}
}