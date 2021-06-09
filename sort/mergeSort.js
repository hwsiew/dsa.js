/**
 * Sort array using merge sort
 * @param {number[]} arr 
 * @returns number[] sorted array
 */
function mergeSort(arr){

	if(!Array.isArray(arr))
		throw 'Invalid array input!';

	
	if(arr.length < 2) return arr;

	let mid = Math.floor(arr.length/2);

	let first = arr.slice(0, mid);
	let second = arr.slice(mid);

	first = mergeSort(first);
	second = mergeSort(second);

	let sorted = [];
	let n1 = first[0];
	let n2 = second[0];
	while(first.length && second.length){
		sorted.push(first[0] > second[0] ? second.shift() : first.shift());
	}

	while(first.length) sorted.push(first.shift());
	while(second.length) sorted.push(second.shift());
	
	return sorted;
}

module.exports = mergeSort;