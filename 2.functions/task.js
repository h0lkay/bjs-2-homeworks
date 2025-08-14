function getArrayParams(...arr) {
	let min = 9999999;
	let max = -9999999;
	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		};

		if (arr[i] < min) {
			min = arr[i];
		};

		sum += arr[i];
	}

	const avg = +(sum / arr.length).toFixed(2);

	// min = Math.min(...arr);
	// max = Math.max(...arr);
	// sum = arr.reduce(function(sum, current) {
	//   return sum + current;
	// }, 0);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length !== 0) {
		const sum = arr.reduce(function(sum, current) {
			return sum + current;
		}, 0);
		return sum;
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length !== 0) {
		return (Math.max(...arr) - Math.min(...arr));
	} else {
		return 0;
	}
}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length !== 0) {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return (sumEvenElement - sumOddElement);
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length !== 0) {
		for (i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return (sumEvenElement / countEvenElement);
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (arr of arrOfArr) {
		let result = func(...arr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
