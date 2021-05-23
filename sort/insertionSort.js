/**
 * Insertion sort for an array
 * 
 * @param {Array} arr 		target array to sort
 * @param {Boolean} asc 	sort in ascending order 
 * @returns Array
 */
function insertionSort(arr, asc = true){
	for(let i = 1; i < arr.length ; i++){
		let key = arr[i];
		let j = i - 1;
		while(j>=0){
			let copy = asc ? arr[j] > key : arr[j] < key;
			if(copy) arr[j+1] = arr[j];
			else break;
			j--;
		}
		arr[j+1] = key;
	}
	return arr;
}

module.exports = insertionSort;