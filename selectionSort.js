function selectionSort(arr){
	for(var i = 0; i < arr.length ; i++){
		let min = i; // index of min value
		for( var j = i+1; j < arr.length ; j++){
			if( arr[j] < arr[min] ) min = j;
		}
		[arr[min],arr[i]] = [arr[i],arr[min]];
	}
}

let data = [-2, 45,0, 11, -9];

console.log(data);
selectionSort(data);
console.log(data);