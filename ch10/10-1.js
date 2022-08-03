function calculateCharge(date, quantity, plan) {
	return isSummner() ? summerCharge() : regularCharge();

	function isSummner() {
		return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
	}

	function summerCharge() {
		return quantity * plan.summerRate;
	}

	function regularCharge() {
		return quantity * plan.regularRate + plan.regularServiceCharge;
	}
}
