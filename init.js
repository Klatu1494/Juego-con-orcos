let juego;
let mapaDePrueba;

window.addEventListener('load', () => {
	new TipoDeHexagono(0.25, false, '7F9ADF'); //agua
	new TipoDeHexagono(1, true, '9FAC1A'); //pasto
	new TipoDeHexagono(2, true, '8E97B6'); //montaña
	new TipoDeHexagono(1.75, true, '20FF00'); //boscoso
	new Raza(
		'Humanos', 'A balanced race.', [
			new TipoDeUnidad('Brave', 6, 3, 0, new Costo({
				[RECURSOS.poblacion]: 1
			}), document.getElementById('test-army')),
			new TipoDeUnidad('Warrior', 12, 14, 0, new Costo({
				[RECURSOS.poblacion]: 1
			}), document.getElementById('test-army')),
			new TipoDeUnidad('Firewarrior', 4, 3, 14, new Costo({
				[RECURSOS.poblacion]: 1
			}), document.getElementById('test-army'))
		]
	);
	new Ejercito([], document.getElementById('test-army')).agregarUnidades(Raza.razas.get('Humanos').tipos[0], 10);
	new Ejercito([], document.getElementById('test-army')).agregarUnidades(Raza.razas.get('Humanos').tipos[0], 5);
	juego = new Juego();
	mapaDePrueba = new Mapa([
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
	], new Coordenadas2D(0, 0));
	Mapa.niveles.push(new Mapa([
		'đ ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā Ā Ā ā ',
		'ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā Ā Ā Ā Ā ā',
		' ÿ ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ā ',
		'ÿ ÿ ÿ ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā Ā ā ā',
		' Ā ÿ ÿ ÿ ÿ Ā Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ',
		'Ā Ā Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' Ā Ā Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ',
		'Ā Ā Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā',
		' Ā Ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ā ġ ',
	], new Coordenadas2D(0, 0)));
	juego.entrarANivel(0);

	document.getElementById('container').style.display = 'block';
});