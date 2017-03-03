window.addEventListener('load', () => {
	Mapa.prototype.dibujante = new DibujanteDeMapas(LADO_INICIAL_HEXAGONO);
	new TipoDeHexagono('a', 0.25, '7F9ADF'); //agua
	new TipoDeHexagono('p', 1, '9FAC1A'); //pasto
	new TipoDeHexagono('m', 2, '8E97B6'); //montaña
	new Raza(
		'Humano', 'A balanced race.', [
			new TipoDeUnidad('Brave', 6, 3, 0, new Costo({
				[RECURSOS.poblacion]: 1
			})),
			new TipoDeUnidad('Warrior', 12, 14, 0, new Costo({
				[RECURSOS.poblacion]: 1
			})),
			new TipoDeUnidad('Firewarrior', 4, 3, 14, new Costo({
				[RECURSOS.poblacion]: 1
			}))
		]
	);
	new Mapa([
		'老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老',
		' 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 耀 耀 老 ',
		'老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 耀 耀 耀 耀 老',
		' 翿 翿 翿 翿 翿 翿 翿 翿 耀 耀 耀 耀 耀 耀 耀 耀 耀 耀 老 ',
		'翿 翿 翿 翿 翿 翿 翿 耀 耀 耀 耀 耀 耀 耀 耀 耀 耀 耀 老 老',
		' 耀 翿 翿 翿 翿 耀 耀 耀 耀 耀 耀 耀 老 老 老 老 老 老 老 ',
		'耀 耀 耀 耀 耀 耀 耀 耀 老 老 老 老 老 老 老 老 老 老 老 老',
		' 耀 耀 耀 耀 耀 耀 老 老 老 老 老 老 老 老 老 老 老 老 老 ',
		'耀 耀 耀 耀 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老',
		' 耀 耀 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 老 ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO * Math.sqrt(3) / 2));

	document.getElementById('container').style.display = 'block';
});