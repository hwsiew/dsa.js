import { CompareFunction } from "./types";

/**
 * Sorting an arry using merge sort.
 * 
 * @param {Array<*>} arr 
 * @param {?CompareFunction} compareFn 
 */
export default function mergeSort(arr: Array<any>, compareFn?: CompareFunction): Array<any>{

	if(!compareFn) compareFn = (a,b) => a-b;

	if(arr.length < 2) return arr;

	let mid = Math.floor(arr.length/2);
	let arr1 = mergeSort(arr.slice(0,mid), compareFn);
	let arr2 = mergeSort(arr.slice(mid), compareFn);

	let merged = [];

	while(arr1.length && arr2.length){
		merged.push( compareFn(arr1[0],arr2[0]) > 0 ?  arr2.shift() : arr1.shift() );
	}

	if(arr1.length) merged = merged.concat(arr1);
	if(arr2.length) merged = merged.concat(arr2);

	return merged;
}