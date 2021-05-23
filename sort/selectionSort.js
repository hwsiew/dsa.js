function selectionSort(arr, asc = true){
	for(let i = 0; i < arr.length ; i++){
		let target = i; // targeted index for min or max
		for( let j = i+1; j < arr.length ; j++){
			let match = asc ? arr[j] < arr[target] : arr[j] > arr[target]
			if( match ) target = j;
		}
		[arr[target],arr[i]] = [arr[i],arr[target]];
	}
	return arr;
}

module.exports = selectionSort;
