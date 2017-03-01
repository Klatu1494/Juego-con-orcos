//clase hecha por Edgar Carballo: https://github.com/karv

class Combinatoria {
	static factorial(n) {
		if (n !== parseInt(n) || n < 0) throw new Error();
		if (n === 0) return 1;
		return n * this.factorial(n - 1);
	}

	static numeroCombinatorio(n, c) {
		return this.factorial(n) / (this.factorial(c) * this.factorial(n - c));
	}
}