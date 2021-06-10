const { it, expect } = require('@jest/globals');
const transpose = require('./transpose');

it('should transpose a matrix', function(){
	let m = [[1,2,3],[4,5,6],[7,8,9]];
	expect(transpose(m)).toEqual([[1,4,7],[2,5,8],[3,6,9]]);
});

it('should check input is a valid nxn matrix', function(){
	let m = [
		[1,2,3],
		[4,5],
		[6,7,8]
	];
	expect(()=>transpose(m)).toThrow();
});