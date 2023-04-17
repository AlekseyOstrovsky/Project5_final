export const makeFormattedSum = (value: number): string =>  {
	let number = (value % 1 === 0) ? String(value) : value.toFixed(2).replace(/[.]/g, ',');
	let result = number.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");

	return result;
}