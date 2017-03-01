const WIDTH = 800;
const HEIGHT = 600;
const TIPOS_DE_DAÑO = {
	slashing: 'Slashing'
}
const LADO_INICIAL_HEXAGONO = 24;
const RECURSOS = {
	oro: 'Oro'
}
const TIPOS_DE_HEXAGONO = {
	agua: new TipoDeHexagono('a', 0.25, '7F9ADF'),
	pasto: new TipoDeHexagono('p', 1, '9FAC1A'),
	montaña: new TipoDeHexagono('m', 2, '8E97B6'),
	minaDeOroGrande: new TipoDeHexagono('O', 2, '373332', RECURSOS.oro, 4),
	minaDeOroChica: new TipoDeHexagono('o', 1.5, '373332', RECURSOS.oro, 8)
}