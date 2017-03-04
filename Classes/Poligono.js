class Poligono {
	constructor(puntos, costoDeMovimiento) {
		if (!(puntos instanceof Array)) throw new Error();
		else {
			for (let punto of puntos)
				if (!(punto instanceof Coordenadas2D)) throw new Error();
			this.puntos = puntos;
			this.lados = [];
			for (let i = 0; i < puntos.length; i++) this.lados.push(new Segmento(puntos[i], puntos[(i + 1) % puntos.length]));
		}
	}

	contiene(punto, returnValueParaPuntosCercaDeAlgunBorde) {
		if (punto instanceof Coordenadas2D && typeof returnValueParaPuntosCercaDeAlgunBorde === 'boolean') {
			let returnValue = false;
			for (let lado of this.lados)
				if (punto.distanciaA(lado).distanciaAlCuadrado < Math.pow(2, -16))
					return {
						info: 'El punto está muy cerca de un lado.',
						value: returnValueParaPuntosCercaDeAlgunBorde,
						lado: lado
					};
			for (let i = 0, j = this.puntos.length - 1; i < this.puntos.length; j = i++) {
				let extremo1 = this.puntos[i];
				let extremo2 = this.puntos[j];
				let interseca = ((punto.y < extremo1.y) != (punto.y < extremo2.y)) && (punto.x < (extremo2.x - extremo1.x) * (punto.y - extremo1.y) / (extremo2.y - extremo1.y) + extremo1.x);
				if (interseca) returnValue = !returnValue;
			}
			if (returnValue) return {
				info: 'El punto está dentro del polígono.',
				value: returnValue
			};
			else return {
				info: 'El punto está fuera del polígono.',
				value: returnValue
			};
		} else throw new Error();
	}
}