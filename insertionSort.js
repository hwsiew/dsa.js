function insertionSort(arr){
	for(let i = 1; i < arr.length ; i++){
		let key = arr[i];
		let j = i - 1;
		while(j>=0){
			if(arr[j] > key) 
				arr[j+1] = arr[j];
			else break;
			j--;
		}
		// for(var j = i-1 ; j >= 0 ; j--){
		// 	if( arr[j] > key ) arr[j+1] = arr[j];
		// 	else {
		// 		break;
		// 	}
		// }
		arr[j+1] = key;
	}
}

let data = [-2, 45,0, 11, -9];

console.log(data);
insertionSort(data);
console.log(data);