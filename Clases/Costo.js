class Costo {
	constructor(costos) {
		costos = costos || {};
		for (let recurso in RECURSOS) this[RECURSOS[recurso]] = costos[RECURSOS[recurso]] || 0;
	}
}