import Heap from "../heap";
import { CompareFunctionBoolean  } from "../../utils/types";

/**
 * Priority Queue 
 * 
 * Internally heap {@link Heap} data structure is used to implement this queue.  
 * 
 * ### Example
 * ```javascript
 * // optional: compare function to determine the priority
 * // if not provided, priority is done simply with `a < b` operator 
 * const ds = new PriorityQueue(); 
 * 
 * ds.enqueue(1); 
 * ds.dequeue();
 * ```
 */
export default class PriorityQueue {

	private _: Heap;

	/**
	 * @constructor
	 * @param {CompareFunctionBoolean} compareFunc 
	 */
	constructor(compareFunc?: CompareFunctionBoolean){
		if(!compareFunc) compareFunc = (a,b) => b>a;
		this._ = new Heap(compareFunc);
	}

	/**
	 * Size of the queue
	 */
	get size(){
		return this._.size;
	}
	
	/**
	 * Peek the top element of queue without removing it
	 * 
	 * @returns the top element 
	 */
	peek(): any{
		return this._.top;
	}

	/**
	 * Enqueue an element to queue
	 * 
	 * @param {*} data
	 * @returns size of queue after added an element
	 */
	enqueue(data: any): number{
		this._.add(data);
		return this.size;
	}

	/**
	 * Remove the top element from queue
	 * 
	 * @returns an element from the queue
	 */
	dequeue(): any{
		return this._.popTop();
	}

	/**
	 * Convert queue to an array
	 * 
	 * @returns an array representation of queue
	 */
	toArray(): Array<any>{
		return this._.toArray();
	}
}