const { Heap } = require('../heap')

class PriorityQueue{
	/**
	 * @constructor
	 */
	constructor(){
		this.data = new Heap();
	}

	/**
	 * Return size of the queue
	 * @returns {number}
	 */
	get size(){
		return this.data.size;
	}

	/**
	 * Chcek if the queue is empty
	 * @returns {boolean}
	 */
	isEmpty(){
		return this.data.size === 0;
	}

	/**
	 * Add a value into the queue
	 * @param {number} value 
	 */
	enqueue(value){
		this.data.insert(value);
	}

	/**
	 * remove the highest priority element
	 * @returns {number}
	 */
	dequeue(){
		let top = this.data.root;
		this.data.delete(top);
		return top;
	}

	/**
	 * Get the underlying data structure
	 * @returns {number[]}
	 */
	toArray(){
		return this.data.toArray();
	}

}

module.exports = PriorityQueue;