class Queue{
	/**
	 * @constructor
	 * @param {Array} arr 
	 */
	constructor(arr = []){

		if(!Array.isArray(arr))
			throw 'An array is required to initialize the queue.';

		this.data = arr;
		this._size = arr.length;

	}

	/**
	 * Get the size of the queue
	 * @param {number}
	 */
	get size(){
		return this._size;
	}

	/**
	 * @param {number} 
	 */
	set size(value){
		this._size = value;
	}

	/**
	 * Enqueue a element to the queue
	 * @param {*} value 
	 */
	enqueue(value){
		this.data.push(value);
		this.size = this.data.length;
	}

	/**
	 * Remove the first element of the queue
	 * @param {Function|} valueOrCallback 
	 * @returns 
	 */
	dequeue(){

		if(this.isEmpty()) return null;

		let data = this.data.splice(0,1)[0];
		this.size = this.data.length;
		
		return data;

	}

	/**
	 * Check if the queue is empty
	 * @returns {boolean}
	 */
	isEmpty(){
		return this.data.length === 0;
	}

	/**
	 * Get the value of the front of the queue without removing it
	 * @returns {?*}
	 */
	peek(){

		if(this.isEmpty()) return null;

		return this.data[0];
	}

	/**
	 * Return the underlying array of the queue
	 * @returns {Array.}
	 */
	toArray(){
		return this.data;
	}
}

module.exports = Queue;