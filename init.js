juego = new Juego();

window.addEventListener('load', () => {
	Mapa.prototype.dibujante = new DibujanteDeMapas(LADO_INICIAL_HEXAGONO);
	new TipoDeHexagono('a', 0.25, '7F9ADF'); //agua
	new TipoDeHexagono('p', 1, '9FAC1A'); //pasto
	new TipoDeHexagono('m', 2, '8E97B6'); //montaña
	new TipoDeHexagono('á', 2, '20FF00'); //boscoso
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
		'ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā Ā Ā ā ',
		'ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā Ā Ā Ā Ā ā',
		' ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ā ',
		'ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ā ā',
		' Ā ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ',
		'Ā Ā Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ',
		'Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO * Math.sqrt(3) / 2)),
	new Mapa([
		'Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ',
		'Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ā Ā Ā Ā Ā Ā Ā Ā Ā',
		' Ā Ā Ā Ā Ā ā ā ā Ā Ă Ă Ā Ā Ā Ā Ā Ā Ā Ā ',
		'Ā Ā Ā Ā Ā ā ā Ā Ā Ā Ă Ā Ā Ā Ā Ā Ā Ā Ā Ā',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ă Ă Ă Ă Ă Ă Ă Ā Ā ',
		'Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ă Ă Ă Ă Ā Ā Ā Ā Ā',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ă Ă Ă Ă Ă Ă Ă Ă Ā Ā Ā ',
		'Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ā Ă Ă Ă Ă Ā Ā Ā Ā Ā',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ă Ă Ā Ā Ā Ā Ā ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO * Math.sqrt(3) / 2));

	document.getElementById('container').style.display = 'block';
});