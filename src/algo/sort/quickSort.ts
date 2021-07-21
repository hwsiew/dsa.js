import { CompareFunction } from "./types";

/**
 * Sorting an arry in place using quick sort.
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunction} compareFn 
 */
export default function quickSort(arr: Array<any>, compareFn?: CompareFunction){

	if(!compareFn) compareFn = (a,b) => a-b;

	let sort = function(low: number, high: number, compare: CompareFunction){

		if(low >= high) return arr;

		let pivot = arr[high],
			left  = low,
			right = high-1;

		while(true){
			while(compare(arr[left],pivot) < 0) { left++; }
			while(right > 0 && compare(arr[right],pivot) > 0){ right--; }

			if(left >= right) break;
			else [arr[left],arr[right]] = [arr[right],arr[left]];
		}

		[arr[left],arr[high]] = [arr[high],arr[left]];

		sort(low, left-1, compare);
		sort(left+1, high, compare);

	}

	sort(0,arr.length-1,compareFn);

}