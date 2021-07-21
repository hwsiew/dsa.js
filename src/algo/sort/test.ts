import { 
	bubbleSort,
	insertionSort,
	selectionSort,
	mergeSort,
	quickSort,
	heapSort
} from '.';

describe('Sorting', function(){
	it('should bubble sort', function(){
		let a = [4,2,5,3,1,3];
		bubbleSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		bubbleSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
	});

	it('should insertion sort', function(){
		let a = [4,2,5,3,1,3];
		insertionSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		insertionSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
	});

	it('should selection sort', function(){
		let a = [4,2,5,3,1,3];
		selectionSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		selectionSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
	});

	it('should merge sort', function(){
		let a = [4,2,5,3,1,3];
		a = mergeSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		b = mergeSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
	});

	it('should quick sort', function(){
		let a = [4,2,5,3,1,3];
		quickSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		quickSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
	});

	it('should heap sort', function(){
		let a = [4,2,5,3,1,3];
		heapSort(a, (a,b) => a-b); // asc
		expect(a).toEqual([1,2,3,3,4,5]);
		let b = [4,2,5,3,1,3];
		quickSort(b, (a,b) => b-a) //dsc 
		expect(b).toEqual([5,4,3,3,2,1])
		let c:Array<any> = [];
		quickSort(c);
		expect(c).toEqual([]);
	});
})