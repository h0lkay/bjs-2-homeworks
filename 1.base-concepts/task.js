"use strict"
function solveEquation(a, b, c) {
	let arr = [],
		discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12;

	const loanBody = amount - contribution;
	const monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	const totalMortgage = +(monthlyPayment * countMonths).toFixed(2);

	return totalMortgage;
}
