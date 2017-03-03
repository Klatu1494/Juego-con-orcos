const BITS_TERRENO = 4;
const MIN_CODIF = 0xFF;

class Codificador{
	static bitsAInt (menor, mayor) {
		return (mayor << BITS_TERRENO) + menor + MIN_CODIF;
	}

	static Codificar (terreno, ejercito) {
		return String.fromCharCode (Codificador.bitsAInt (terreno, ejercito));
	}
}