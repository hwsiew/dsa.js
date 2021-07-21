import { CompareFunction } from "./types";

/**
 * Sorting an array inplace using insertion sort
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunction} compareFn
 */
const insertionSort = function(arr: Array<any>, compareFn?: CompareFunction){
	let n = arr.length;
	if(!compareFn) compareFn = (a,b) => a-b;

	for(let i = 1 ; i < n ; i++){
		let target = arr[i];
		let j = i-1;
		while(j >= 0){
			if(compareFn(target,arr[j]) <= 0) arr[j+1] = arr[j];
			else break;
			j--;
		}
		arr[j+1] = target;
	}

}

export default insertionSort;