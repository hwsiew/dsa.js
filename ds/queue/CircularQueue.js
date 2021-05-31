const Queue = require('./Queue');

class CircularQueue extends Queue{
	/**
	 * @constructor
	 * @param {number} size - the maximum size of the queue
	 */
	constructor(size){

		if(size < 1) throw 'A positive size greater than 0 is require.';

		let arr = new Array(size);
		super(arr);

		this.maxSize = size;
		this.front = -1;
		this.end = -1;

	}

	isEmpty(){
		return this.front === -1 && this.end === -1;
	}

	isFull(){
		return (this.end + 1)%this.maxSize == this.front;
	}

	/**
	 * Enqueue an element of any type into the queue
	 * @param {*} element 
	 */
	enqueue(element){

		if(this.isFull())
			throw 'The queue is full!';
	
		if(this.front == -1 && this.end == -1){
			this.front = 0;
			this.end   = 0;
		} else {
			this.end = (this.end+1)%this.maxSize;
		}
		
		this.data[this.end] = element;

	}

	/**
	 * Remove the front element from the queue
	 * @returns {*} element - an element of the queue;
	 */
	dequeue(){
		if(this.isEmpty()) return null;

		let element = this.data[this.front];
		this.data[this.front] = undefined;
		if( this.front == this.end ){
			this.front = -1;
			this.end = -1;	
		} else {
			this.front = (this.front+1)%this.maxSize;
		}

		return element;
	}

}

module.exports = CircularQueue;