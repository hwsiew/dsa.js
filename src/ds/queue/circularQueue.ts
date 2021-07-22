/**
 * ## Circular Queue
 * 
 * A circular shape of queue which follows first in first out.
 * 
 * ### Examples
 * ```javascript
 * const { CircularQueue } = require('dsajs');
 * // or 
 * // import { CircularQueue } from 'dsajs';
 * 
 * let ds = new CircularQueue();
 * ``` 
 */
export default class CircularQueue {

	private _: Array<any>;
	private _first: number;
	private _last: number;
	private _size: number;
	
	/**
	 * @constructor
	 * @param size the number elements allows for circular queue
	 */
	constructor(size: number){
		this._ = new Array(size);
		this._first = -1;
		this._last  = -1;
		this._size  = size;
	}

	/**
	 * The size of circular queue 
	 */
	get size() {
		return this._size;
	}

	/**
	 * Check if queue is empty
	 * 
	 * @returns {boolean}
	 */
	isEmpty(): boolean{
		return this._first == -1 && this._last == -1;
	}

	/**
	 * Check if queue is full
	 * 
	 * @returns {boolean}
	 */
	isFull(): boolean{
		return (this._last + 1) % this._size == this._first;
	}

	/**
	 * Enqueue an element to queue
	 * 
	 * @param {*} element 
	 */
	enqueue(element: any){
		if(this.isEmpty()){
			this._[0] = element;
			this._first = 0;
			this._last  = 0;
		} else if(this.isFull()){
			throw new Error('Queue is full');
		} else {
			this._last = (this._last + 1) % this._size;
			this._[this._last] = element;
		}
	}

	/**
	 * Remove the first element from queue if one exists 
	 * 
	 * @returns {*} an element of queue or undefined if queue is empty
	 */
	dequeue(){
		if(this.isEmpty()) return undefined;
		
		let first = this._first;

		if(this._first == this._last){
			this._first = -1;
			this._last  = -1;
		} else {
			this._first = (this._first + 1) % this._size;
		}

		return this._[first];
	}

	/**
	 * Peek the first element of queue without removing it from queue
	 * 
	 * @returns {*} an element of queue or undefined if queue is empty
	 */
	peek(){
		if(this.isEmpty()) return undefined;

		return this._[this._first];
	}
}