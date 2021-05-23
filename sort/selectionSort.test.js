const { it, expect } = require('@jest/globals');
const selectionSort = require('./selectionSort');

it('sort array in ascending order', ()=>{
	let arr = [5,1,4,2,8];
	let ans = [1,2,4,5,8];
	expect(selectionSort(arr)).toEqual(ans);
});

it('sort array in descending order', () => {
	let arr = [5,1,4,2,8];
	let ans = [8,5,4,2,1];
	expect(selectionSort(arr,false)).toEqual(ans);
});