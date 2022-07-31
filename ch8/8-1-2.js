export class Account {
	constructor(accountType, daysOverdrawn) {
		this.type = accountType;
		this._daysOverdrawn = daysOverdrawn;
	}

	get bankCharge() {
		let result = 4.5;
		if (this._daysOverdrawn > 0) result += this.overdraftCharge;
		return result;
	}

	get daysOverdrawn() {
		return this._daysOverdrawn;
	}
}

export class AccountType {
	constructor(type) {
		this._type = type;
	}
	get isPremium() {
		return this._type === 'Premium';
	}

	overdraftCharge(daysOverdrawn) {
		if (!this.isPremium) {
      return this._daysOverdrawn * 1.75;
    }

		if (this.isPremium) {
			const baseCharge = 10;
			if (daysOverdrawn <= 7) return baseCharge;
			else return baseCharge + (daysOverdrawn - 7) * 0.85;
		}
}
