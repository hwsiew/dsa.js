/**
 * Bubble sort an array
 * 
 * @param	array	arr		array to be sort
 * @param	bool	asc		sort in ascending order
 * 
 * @returns array
 */
function bubbleSort( arr , asc = true){
	for(let i = 0 ; i < arr.length ; i++){
		for(let j = 0 ; j < arr.length - i - 1; j++){
			
			let swap = false;
			
			if(asc) swap = arr[j] > arr[j+1];
			else swap = arr[j] < arr[j+1];

			if(swap) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 

		}
			
	}
	return arr;
}

module.exports = bubbleSort;