import { CompareFunctionNumber } from '../../utils/types';

/**
 * Sorting an arry inplace using bubble sort.
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunctionNumber} compareFn 
 */
const bubbleSort = function(arr: Array<any>, compareFn?: CompareFunctionNumber): void{
	let n = arr.length;
	if(!compareFn){
		compareFn = (a,b) => a-b;
	}

	for(let i = 0 ; i < n ; i++)
		for(let j = 0 ; j < n-1-i ; j++){
			let a = arr[j],
				b = arr[j+1];
			if(compareFn(a,b) > 0) [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
		}
}

export default bubbleSort;
