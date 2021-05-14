// Binary Search is a searching algorithm for finding an element's position in a sorted array.

function binarySearch(arr, target, low, high){

	if(high >= low){

		let mid = low + Math.floor((high - low)/2)

		if(target == arr[mid]) return mid;

		if(target > arr[mid]) return binarySearch(arr, target, mid+1, high);
		else return binarySearch(arr, target, low, mid-1);

	} else return -1

}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;

console.log(binarySearch(array, target, 0, array.length));