/** Class representing a Heap data structure */
class Heap{
	/**
	 * Create a heap data structure
	 * @param {boolean} max 
	 */
	constructor(max = true){
		this.data = [];
		this.max = max; // is maximum heap
	}

	/**
	 * Get the size of the heap
	 * @returns {number} size of the heap
	 */
	get size(){
		return this.data.length;
	}

	/**
	 * Get the root node of the heap
	 * @returns {?number[]}
	 */
	get root(){
		return this.data ? this.data[0] : null;
	}

	/**
	 * Insert a node to heap
	 * @param {number} num 
	 */
	insert(num){
		this.data.push(num);

		if(this.size > 1){
			this.heapify();
		}
	}

	/**
	 * Find a number in heap
	 * @param {number} num 
	 * @returns {?number}
	 */
	find(num){
		let i = 0 ;
		let arr = this.data;
		while(i < this.size){
			if(arr[i] == num) return i
			i++;
		}

		return null;
	}

	/**
	 * Delete a number from heap
	 * @param {number} num  
	 */
	delete(num){
		let found = this.find(num);

		if(found == -1) return;

		let arr = this.data;

		[arr[this.size-1], arr[found]] = [arr[found], arr[this.size-1]];

		arr.pop();
		this.heapify();
	}

	/**
	 * heapify the tree strucutre from floor(n/2-1), where n = total number of nodes
	 */
	heapify(){

		let i = Math.floor((this.size/2) - 1);
		let arr = this.data;

		while(i >= 0){

			let target = i;
		
			let li = 2*i + 1;
			let match = this.max ?  arr[li] > arr[target] : arr[li] < arr[target];
			if(li < this.size && match) target = li;

			let ri = 2*i + 2;
			match = this.max ? arr[ri] > arr[target] : arr[ri] < arr[target];
			if(ri < this.size && match) target = ri;

			if(target != i) [arr[i], arr[target]] = [arr[target], arr[i]];

			i--
		}

	}

	/**
	 * Get the underlying data structure
	 * @returns {number[]}
	 */
	toArray(){
		return this.data;
	}
}

module.exports = Heap;