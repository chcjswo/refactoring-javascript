export class Site {
	constructor(customer) {
		this._customer = customer;
	}

	get customer() {
		return this._customer === 'unknown' ? new UnknownCustomer() : new Customer();
	}
}

export class Customer {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	get billingPlan() {
		//
	}

	set billingPlan(arg) {
		//
	}

	get paymentHistory() {
		//
	}
}

class UnknownCustomer extends Customer {
	get name() {
		return 'occupant';
	}
}

// 사용하는 부분
export function customerName(site) {
	const aCustomer = site.customer;
	customerName = aCustomer.name;

	return customerName;
}
