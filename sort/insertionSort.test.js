const { it, expect } = require('@jest/globals');
const insertionSort = require('./insertionSort');

it('sort array in ascending order', ()=>{
	let arr = [5,1,4,2,8];
	let ans = [1,2,4,5,8];
	expect(insertionSort(arr)).toEqual(ans);
});

it('sort array in descending order', () => {
	let arr = [5,1,4,2,8];
	let ans = [8,5,4,2,1];
	expect(insertionSort(arr,false)).toEqual(ans);
});