export function adjustedCapital(instrument) {
	if (isInstrument(instrument)) {
		return (instrument.income / instrument.duration) * anInstrument.adjustmentFactor;
	}
	return 0;
}

function isInstrument(instrument) {
	return instrument.capital > 0 && instrument.interestRate > 0 && instrument.duration > 0;
}
