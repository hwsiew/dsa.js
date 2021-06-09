const mergeSort = require('./mergeSort');
const { it, expect } = require('@jest/globals');

it('should sort an array', function(){
	let arr = [1,4,3,5,6,2,9,7];
	expect(mergeSort(arr)).toEqual([1,2,3,4,5,6,7,9]);
});

it('should sort an array with negative value', function(){
	let arr = [1,4,-3,-5,6,-2,9,7];
	expect(mergeSort(arr)).toEqual([-5,-3,-2,1,4,6,7,9]);
});

it('should return empty array as it is', function(){
	let arr = [];
	expect(mergeSort(arr)).toEqual([]);
});

it('should throw an error if input is not an array', function(){
	let arr = '1234';
	expect(() => mergeSort(arr)).toThrow();
});