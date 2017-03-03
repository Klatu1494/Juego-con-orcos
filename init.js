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
		'ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ',
		' ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā ÿ ',
		'ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā Ā Ā ÿ',
		' Đ Đ Đ Đ Đ Đ Đ Đ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ÿ ',
		'Đ Đ Đ Đ Đ Đ Đ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ÿ ÿ',
		' Ā Đ Đ Đ Đ Ā Ā Ā Ā Ā Ā Ā ÿ ÿ ÿ ÿ ÿ ÿ ÿ ',
		'Ā Ā Ā Ā Ā Ā Ā Ā ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ',
		' Ā Ā Ā Ā Ā Ā ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ',
		'Ā Ā Ā Ā ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ',
		' Ā Ā ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO * Math.sqrt(3) / 2)),
	new Mapa([
		'Ā Ā Ā Ă Ă Ă Ā Ā Ā Ă Ā Ā Ā Ā Ā Ā Đ Đ Đ Đ',
		' Ā Ā Ă Ă Ă Ā Ā Ā Ă Ă Ā Ā Ā Ā Đ Đ Đ Đ Đ ',
		'Ā Ā Ā Ă Ă Ă Ă Ā Ă Ă Ē Đ Đ Đ Đ Đ Đ Đ Đ Đ',
		' Ā Ā Ă Ă Ă ā ā ā Ă Ē Ē Đ Đ Đ Đ Đ Đ Đ Đ ',
		'Ā Ā Ā Ā Ā ā ā Ā Ā Ă Ē Đ Đ Đ Đ Đ Đ Đ Đ Đ',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ă Ē Ē Ē Ē Ē Ē Ē Ē Đ Đ ',
		'Ā Ā Ā Ā Ā Ā Ā Ā Ā Ă Ē Ē Ē Ē Ē Đ Đ Đ Đ Đ',
		' Ā Ā Ā Ā Ā Ā Ā Ā Ē Ē Ē Ē Ē Ē Ē Ē Đ Đ Đ ',
		'Ā Ā Ā Ā Ā Ā Ā Ā Đ Ē Đ Ē Ē Ē Ē Đ Đ Đ Đ Đ',
		' Ā Ā Ā Ā Ā Ā Đ Đ Đ Đ Đ Ē Ē Ē Đ Đ Đ Đ Đ ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO * Math.sqrt(3) / 2));

	document.getElementById('container').style.disĐlay = 'block';
});