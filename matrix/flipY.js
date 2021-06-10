/**
 * Flip a matrix on Y asix
 * @param {array[]} m nXm matrix 
 * @returns {array[]}
 */
function flipY(m){

	let n = m.length;

	if(!m.every(x => Array.isArray(x)))
		throw 'Input is not a valid matrix';

	for(let i = 0 ; i < n ; i++){
		let len = m[i].length;
		for(let j = 0; j < Math.floor(len/2) ; j++){
			[m[i][j],m[i][len-1-j]]  = [m[i][len-1-j],m[i][j]];
		}
	}

	return m;
}

console.log(flipY([[1,2,3],[4,5,6],[7,8,9,10]]));


module.exports = flipY;