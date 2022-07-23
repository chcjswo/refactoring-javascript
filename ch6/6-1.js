export function printOwing(invoice) {
	printBanner();
	const outstanding = calulateOutstanding(invoice);
	recodeDueDate(invoice);
	printDeatails(invoice, outstanding);
}

const invoice = {
	orders: [{ amount: 2 }, { amount: 5 }],
	customer: '엘리',
};

printOwing(invoice);

function printDeatails(invoice, outstanding) {
	console.log(`name: ${invoice.customer}`);
	console.log(`amount: ${outstanding}`);
	console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
	console.log('***********************');
	console.log('**** Customer Owes ****');
	console.log('***********************');
}

function calulateOutstanding(invoice) {
	return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recodeDueDate(invoice) {
	const today = new Date();
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
