const BITS_TERRENO = 4;
const MIN_CODIF = 20;

class Codificador{
	static bitsToInt (terreno, ejercito) {
		return (ejercito << BITS_TERRENO) + terreno + MIN_CODIF;
	}
}
