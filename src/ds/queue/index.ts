import CircularQueue from "./circularQueue";
import PriorityQueue from "./priorityQueue";

/**
 * ## Queue
 * 
 * First in first out (FIFO) linear data structure
 * 
 * ### Examples
 * ```javascript
 * const { Queue } = require('dsajs');
 * // or
 * // import { Queue } from 'dsajs';
 * 
 * let q = new Queue();
 * ```  
 */
class Queue {

	private _: Array<any>;

	/**
	 * @constructor
	 * @param arr optional array to initialize queue
	 * @throws Will throw an error if the argument is provided and is not an arry 
	 */
	constructor(arr: Array<any> = []){

		if(!Array.isArray(arr))
			throw new Error('Argument is not an array.');

		this._ = [...arr];
	}

	/**
	 * The size of the queue
	 * 
	 * @returns {number}
	 */
	get size(): number {
		return this._.length
	}

	/**
	 * Check if queue is empty
	 * 
	 * @returns {boolean}
	 */
	isEmpty(): boolean{
		return this._.length === 0;
	}

	/**
	 * Enqueue an element to queue
	 * 
	 * @param {any} element 
	 */
	enqueue(element: any): void {
		this._.push(element);
	}

	/**
	 * Get the first element from the queue
	 * 
	 * @returns the first element from the queue or `undefined` if queue is empty
	 */
	dequeue(): any | undefined {
		if(this.isEmpty()) return undefined;

		return this._.shift();
	}

	/**
	 * Peek the first element of queue without removing it
	 * 
	 * @returns an element from the queue or `undefined` if queue is empty
	 */
	peek(): any | undefined {
		if(this.isEmpty()) return undefined;

		return this._[0];
	}
}

export {
	Queue as default,
	CircularQueue,
	PriorityQueue
};
