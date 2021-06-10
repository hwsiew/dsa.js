/**
 * Transpose a nxn matrix
 * @param {array} m nxn matrix 
 * @returns {array} the transpose matrix
 */
function transpose(m){

	let n = m.length;

	if(!m.every(x => Array.isArray(x) && x.length == n)) 
		throw `Input is not ${n}x${n} matrix`;

	for(let i = 0 ; i < n; i++){
		for(let j = i ; j < n ; j++){
			[m[i][j],m[j][i]] = [m[j][i],m[i][j]];
		}
	}

	return m;
}

module.exports = transpose;