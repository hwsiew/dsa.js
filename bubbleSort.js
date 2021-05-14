function bubbleSort( arr ){

	for(var i = 0 ; i < arr.length ; i++){
		for(var j = 0 ; j < arr.length - i - 1; j++)
			if(arr[j] > arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 
	}

}

let data = [-2, 45,0, 11, -9];

console.log(data);
bubbleSort(data);
console.log(data);