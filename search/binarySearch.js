/**
 * Recursive implementation of binary search
 * 
 * @param {Array} arr 
 * @param {Number} target 
 * @param {Number} low 
 * @param {Number} high 
 * @returns Number	index of found item or -1
 */
function binarySearch(arr, target, low, high){

	if(high >= low){

		let mid = low + Math.floor((high - low)/2)

		if(target == arr[mid]) return mid;

		if(target > arr[mid]) return binarySearch(arr, target, mid+1, high);
		else return binarySearch(arr, target, low, mid-1);

	} else return -1

}

module.exports = binarySearch;