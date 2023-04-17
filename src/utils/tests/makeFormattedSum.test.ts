import { makeFormattedSum } from "../makeFormattedSum";

describe('makeFormattedSum', () => {

	let inputVal1 = 1234567890;
	let outputVal1 = '1 234 567 890';
	let inputVal2 = 12345.67;
	let outputVal2 = '12 345,67';
	let inputVal3 = 12345.67000001;	
	let inputVal4 = 12345.67499999;	
	let inputVal5 = 12345.1;
	let outputVal3 = '12 345,10';
	let inputVal6 = 12345.001;
	let outputVal4 = '12 345,00';

	test('returns string', () => {
		expect(typeof makeFormattedSum(0)).toEqual('string');
		expect(typeof makeFormattedSum(inputVal1)).toEqual('string');
		expect(typeof makeFormattedSum(inputVal2)).toEqual('string');
	})

	test('returns formatted number', () => {
		expect(makeFormattedSum(0)).toBe('0');
		expect(makeFormattedSum(inputVal1)).toBe(outputVal1);
		expect(makeFormattedSum(inputVal2)).toBe(outputVal2);
		expect(makeFormattedSum(inputVal3)).toBe(outputVal2);
		expect(makeFormattedSum(inputVal4)).toBe(outputVal2);
		expect(makeFormattedSum(inputVal5)).toBe(outputVal3);
		expect(makeFormattedSum(inputVal6)).toBe(outputVal4);
	})

})