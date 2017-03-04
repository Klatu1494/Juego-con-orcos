const BITS_TERRENO = 4;
const BITS_EJERCITO_O_TIPO_DE_UNIDAD = 11;
const MIN_CODIF = 0xFF;
const TERRENO = document.createElement('select');
const EJERCITO_O_TIPO_DE_UNIDAD = document.createElement('select');
const TERRENOS = ['Agua', 'Pasto', 'Montaña'];

class Codificador {
	static bitsAInt(menor, mayor) {
		return (mayor << BITS_TERRENO) + menor + MIN_CODIF;
	}

	static codificar() {
		return document.getElementById('output').innerText = String.fromCharCode(Codificador.bitsAInt(TERRENO.selectedIndex, EJERCITO_O_TIPO_DE_UNIDAD.selectedIndex));
	}
}

window.addEventListener('load', () => {
	//creo los selects
	document.body.appendChild(document.createTextNode('Terreno: '));
	for (let i = 0; i < Math.pow(2, BITS_TERRENO); i++) {
		let option = document.createElement('option');
		option.innerText = TERRENOS[i] || 'Terreno ' + (i + 1);
		TERRENO.appendChild(option);
	}
	document.body.appendChild(TERRENO);
	document.body.appendChild(document.createElement('br'));
	document.body.appendChild(document.createTextNode('Ejército: '));
	let option = document.createElement('option');
	option.innerText = 'Ninguno';
	EJERCITO_O_TIPO_DE_UNIDAD.appendChild(option);
	for (let i = 0; i < Math.pow(2, BITS_EJERCITO_O_TIPO_DE_UNIDAD) - 1; i++) {
		let option = document.createElement('option');
		option.innerText = 'Ejército ' + (i + 1);
		EJERCITO_O_TIPO_DE_UNIDAD.appendChild(option);
	}
	document.body.appendChild(EJERCITO_O_TIPO_DE_UNIDAD);
	//y les agrego event listeners
	TERRENO.addEventListener('change', Codificador.codificar);
	EJERCITO_O_TIPO_DE_UNIDAD.addEventListener('change', Codificador.codificar);

	Codificador.codificar();
});