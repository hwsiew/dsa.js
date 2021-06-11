const { it, expect } = require('@jest/globals');
const quickSort = require('./quickSort');

it('should sort an array in ascending order', function(){
	let arr = [4,6,3,2,1,9,7];
	quickSort(arr);
	expect(arr).toEqual([1,2,3,4,6,7,9]);
});