import { CompareFunctionNumber } from '../../utils/types';

/**
 * Sorting an arry in place using quick sort.
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunctionNumber} compareFn 
 */
export default function quickSort(arr: Array<any>, compareFn?: CompareFunctionNumber){

	if(!compareFn) compareFn = (a,b) => a-b;

	let sort = function(low: number, high: number, compare: CompareFunctionNumber){

		if(low >= high) return arr;

		let pivot = arr[high],
			left  = low,
			right = high-1;

		while(true){
			while(left < arr.length && compare(arr[left],pivot) < 0) { left++; }
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