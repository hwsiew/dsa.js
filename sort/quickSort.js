/**
 * Sort an array inplace using quick sort
 * @param {array} arr
 * @param {number} low first index of the array
 * @param {number} high last index of the array 
 */
function quickSort(arr, low = 0, high = arr.length-1){

	if(low >= high) return arr;

	let pIndex = partition(arr,low,high);
	console.log(pIndex, arr);
	quickSort(arr, low, pIndex-1);
	quickSort(arr, pIndex+1, high);

}

let partition = function(arr,low,high){

	let left = low;
	let right = high-1;
	let pivot = arr[high];

	while(true){
		while(arr[left] < pivot) { left++; }
		while(right > 0 && arr[right] > pivot){ right--; }

		if(left >= right) break;
		else [arr[left],arr[right]] = [arr[right],arr[left]];
	}

	[arr[left],arr[high]] = [arr[high],arr[left]];
	return left

}

module.exports = quickSort;