import { CompareFunctionNumber } from '../../utils/types';

/**
 * Sorting an arry in place using quick sort.
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunctionNumber} compareFn 
 */
export default function heapSort(arr: Array<any>, compareFn?: CompareFunctionNumber){

	if(!compareFn) compareFn = (a,b) => a-b;

	let heapify = function(start: number, compare: CompareFunctionNumber){
		let len = arr.length - start;
		let n = start + Math.floor(len/2 - 1);
		while(n >= start){
			let root = n,
				left = 2*root + 1 - start,
				right = 2*root + 2 - start;

			if(left < arr.length  && compare(arr[root], arr[left]) >= 0) root = left;
			if(right < arr.length  && compare(arr[root], arr[right]) >= 0) root = right;

			if(root !== n) [arr[root], arr[n]] = [arr[n], arr[root]];

			n--;
		}
	}

	let i = 0;
	while(i < arr.length){
		heapify(i++,compareFn);
	}
}