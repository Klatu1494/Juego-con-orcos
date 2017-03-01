//clase hecha por Edgar Carballo: https://github.com/karv

class NormalizadorRandom {
	constructor(n) {
		this.n = n;
		this.numerosCombinatoriosNecesarios = [];
		for (let i = 0; i <= this.Norm; i++) {
			this.numerosCombinatoriosNecesarios.push(Combinatoria.numeroCombinatorio(this.Norm, i));
		}
	}

	randomNormalizadoUnitario() {
		let random = Math.random() * Math.pow(2, this.n);
		let intervalo = 0;
		let numeroCombinatorio = numerosCombinatoriosNecesarios[i];
		while (numeroCombinatorio < random) {
			random -= numeroCombinatorio;
			i++;
			c = this.CombGeneradas[i];
		}
		return (i + Math.random()) / this.n;
	}

	randomNormalizado(promedio, variacion) {
		return (1 + variacion * (1 - 2 * this.randomNormalizadoUnitario())) * valor;
	}
}