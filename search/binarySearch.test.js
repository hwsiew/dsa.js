const { it, expect } = require('@jest/globals');
const binarySearch = require('./binarySearch');

it('should find in the middle', () => {
	let arr = [1,2,3,4,5];
	let target = 3;
	let ans = 2;
	expect(binarySearch(arr,target,0,arr.length-1)).toBe(ans);
})

it('should not find in the array', () => {
	let arr = [1,2,3,4,5];
	let target = 6;
	let ans = -1;
	expect(binarySearch(arr,target,0,arr.length-1)).toBe(ans);
})

it('should find in duplicated array', () => {
	let arr = [1,2,3,3,4,4,5,5];
	let target = 5;
	let ans = 6;
	expect(binarySearch(arr,target,0,arr.length-1)).toBe(ans);
})