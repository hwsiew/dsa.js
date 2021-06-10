const { it, expect } = require('@jest/globals');
const flipY = require('./flipY');

it('should flip a matrix on Y asis', function(){
	let m = [
		[1,2,3],
		[4,5,6]
	];
	expect(flipY(m)).toEqual([
		[3,2,1],
		[6,5,4]
	]);
})