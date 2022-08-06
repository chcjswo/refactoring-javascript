class Employee {
	#name;
	constructor(name) {
		this.#name = name;
	}

	get type() {
		return 'employee';
	}

	toString() {
		return `${this.#name} (${this.type})`;
	}
}

class Engineer extends Employee {
	constructor(name) {
		super(name);
	}

	get type() {
		return 'engineer';
	}
}

class Manager extends Employee {
	constructor(name) {
		super(name);
	}

	get type() {
		return 'manager';
	}
}

const ellie = new Engineer('엘리', 'engineer');
const bob = new Manager('밥', 'manager');

console.log(ellie.toString());
console.log(bob.toString());

