const { expect } = require('@jest/globals');
const bubbleSort = require('./bubbleSort');

it('sort array in ascending order', () => {
	let arr = [5,1,4,2,8];
	let ans = [1,2,4,5,8];
	expect(bubbleSort(arr)).toEqual(ans);
});

it('sort array in descending order', () => {
	let arr = [5,1,4,2,8];
	let ans = [8,5,4,2,1];
	expect(bubbleSort(arr,false)).toEqual(ans);
});