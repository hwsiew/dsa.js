import { binarySearch } from '.';

describe('Test cases for search algorithms', function(){
	it('should search using binary search', function(){
		let arr = [1,2,3,4,5,6,7,8,9,10];
		let target = 6; // want to find 6
		expect(binarySearch(arr, (a) => a-target)).toEqual(6); 
		target = 20;
		expect(binarySearch(arr, (a) => a-target)).toEqual(-1); 
	});
});