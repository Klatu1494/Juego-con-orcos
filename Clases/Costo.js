class Costo {
	constructor(costos) {
		if (!(costos instanceof Object)) costos = costos || {};
		for (let recurso in RECURSOS) this[RECURSOS[recurso]] = costos[RECURSOS[recurso]] || 0;
	}
}