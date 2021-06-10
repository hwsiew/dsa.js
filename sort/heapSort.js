/**
 * Sort an array using heap sort
 * @param {array} arr 
 * @param {function} compareFn 
 * @returns {array} sorted array
 */
function heapSort(arr, compareFn = null){

	if(!Array.isArray(arr))
		throw 'Invalid input array!';

	let sorted = [];

	if(!compareFn) compareFn = (a,b) => a-b

	while(arr.length){
		arr = heapify(arr,compareFn);
		sorted.push(arr.shift());
	}
	
	return sorted;

}

function heapify(arr, compareFn){

	let n = arr.length;
	let node = Math.floor(n/2 - 1);

	while(node >= 0){

		let smaller = node;
		let il = 2 * node + 1;
		let ir = 2 * node + 2; 

		if(il < n && compareFn(arr[il],arr[smaller]) <= 0) smaller = il;
		if(ir < n && compareFn(arr[ir],arr[smaller]) <= 0) smaller = ir;
		
		if(smaller !== node) [arr[smaller],arr[node]] = [arr[node], arr[smaller]];

		node--;
	}

	return arr;
}

module.exports = heapSort;