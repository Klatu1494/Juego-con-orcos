window.addEventListener('load', () => {
	new Raza(
		'Orco', '', [
			new Clase('Trabajador', 240, 0, new Costo({
				[RECURSOS.comidaPorDia]: 1
			})),
			new Clase('Mago', 335, 200, new Costo({
				[RECURSOS.comidaPorDia]: 2
			})),
			new Clase('Guerrero', 700, 0, new Costo({
				[RECURSOS.comidaPorDia]: 3
			}))
		]
	);
	new Arma(
		'None', {
			dañoMin: 0,
			dañoMax: 0,
			tipoDeDaño: TIPOS_DE_DAÑO.slashing, //no da hacer un tipo de daño específicamente para un arma que nunca voy a usar
			costo: new Costo(0, 0, 0)
		}, false
	);
	new Arma(
		'Pickaxe', {
			dañoMin: 7,
			dañoMax: 8,
			tipoDeDaño: TIPOS_DE_DAÑO.slashing,
			costo: new Costo(5, 0, 0)
		}, true
	);
	new Arma(
		'Battle axe', {
			dañoMin: 18,
			dañoMax: 21,
			tipoDeDaño: TIPOS_DE_DAÑO.slashing,
			costo: new Costo(35, 0, 0)
		}, true
	);
	new Mapa([
		'm m m m m m m m m m m m m m m m m m m m',
		' m m m m m m m m m m m m m m m m p p m ',
		'm m m m m m m m m m m m m m m o p p p m',
		' a a a a a a a a p p p p p p p p p p m ',
		'a a a a a a a p p p O p p p p p p p m m',
		' p a a a a p p p p p p p m m m m m m m ',
		'p p o p p p p p m m m m m m m m m m m m',
		' p p p p p o m m m m m m m m m m m m m ',
		'p p p p m m m m m m m m m m m m m m m m',
		' p p m m m m m m m m m m m m m m m m m ',
	], new Coordenadas2D(-LADO_INICIAL_HEXAGONO, -LADO_INICIAL_HEXAGONO));

	document.getElementById('container').style.display = 'block';
});