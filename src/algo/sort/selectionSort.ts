import { CompareFunctionNumber } from '../../utils/types';

/**
 * Sort arry in place using selection sort
 * 
 * @param {Array<*>} arr 
 * @param {CompareFunctionNumber} compareFn
 */
const selectionSort = function(arr: Array<any>, compareFn?: CompareFunctionNumber) {
	
	if(!compareFn) compareFn = (a,b) => a-b;
	
	let n = arr.length;

	for(let i = 0 ; i < n ; i++){
		let target = i;
		for(let j = i+1 ; j < n ; j++){
			if(compareFn(arr[target],arr[j]) > 0) target = j;
		}
		if(target !== i) [arr[target], arr[i]] = [arr[i], arr[target]];
	}
}

export default selectionSort;