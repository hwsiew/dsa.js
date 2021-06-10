const { expect } = require('@jest/globals');
const heapSort = require('./heapSort');

it('should work for empty array', function(){
	let arr = [];
	expect(heapSort(arr)).toEqual([])
});

it('should throw error if input is not an array', function(){
	let arr = 'abc';
	expect(() => heapSort(arr)).toThrow();
});

it('should sort an number array in assending order', function(){
	let arr = [4,3,1,5,7,2,6,9,8];
	expect(heapSort(arr)).toEqual([1,2,3,4,5,6,7,8,9])
});

it('should sort an number array in descending order', function(){
	let arr = [4,3,1,5,7,2,6,9,8];
	expect(heapSort(arr,(a,b)=>b-a)).toEqual([1,2,3,4,5,6,7,8,9].reverse());
});

it('should sort an string array in assending order', function(){
	let arr = Array.from('fagdjkecbhi');
	expect(heapSort(arr,(a,b) => a>b)).toEqual(['a','b','c','d','e','f','g','h','i','j','k']);
});

it('should sort an string array in descending order', function(){
	let arr = Array.from('fagdjkecbhi');
	expect(heapSort(arr,(a,b) => b>a)).toEqual(['a','b','c','d','e','f','g','h','i','j','k'].reverse());
});

it('should sort duplicated value', function(){
	let arr = [4,3,1,7,5,5,6,7,2,6,9,8];
	expect(heapSort(arr)).toEqual([1,2,3,4,5,5,6,6,7,7,8,9])
});

it('should sort negative value', function(){
	let arr = [4,3,-1,-7,5,-5,6,7,2,6,9,8];
	expect(heapSort(arr)).toEqual([-7,-5,-1,2,3,4,5,6,6,7,8,9])
});