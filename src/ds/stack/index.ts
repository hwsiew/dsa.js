/**
 * # Stack
 * 
 * Last in first out (LIFO) linear data structure
 * 
 * ## Example
 * ```javascript
 * const { Stack }  = require('dsajs');
 * // or
 * // import { Stack } from 'dsajs';
 * 
 * let s = new Stack();
 * ```
 */
export default class Stack {
	/**
	 * to hold stack's data
	 * @private 
	 */
	private _: Array<any>;

	/**
	 * @constructor
	 * @param {?Array[*]} arr optional array to initialize stack
	 * @throws Will throw an error if the argument is provided and is not an arry 
	 */
	constructor(arr: Array<any> = []){
		
		if(!Array.isArray(arr))
			throw new Error('Argument is not an array.');

		this._ = [...arr]; 
	}

	/**
	 * Get the number of elements in stack
	 * 
	 * @returns {number} number of elements in stack
	 */
	get size(): number {
		return this._.length;
	}

	/**
	 * Returns the top element of stack
	 * 
	 * @returns the top element of stack or `undefined` if stack is empty
	 */
	pop(): any | undefined {
		return this.isEmpty() ? undefined : this._.pop(); 
	}

	/**
	 * Push an element to stack
	 * 
	 * @param {*} element 
	 */
	push(element: any): void{
		this._.push(element);
	}

	/**
	 * Peek the top element of a stack without removing it from stack
	 * 
	 * @returns the last element of stack or `undefined` if stack is empty
	 */
	peek(): any{
		let last = this.isEmpty() ? null : this.size - 1;
		if(last === null) return undefined;
		return this._[last];
	}

	/**
	 * Check if stack is empty
	 * 
	 * @returns {boolean} `true` if stack is empty else `false`;
	 */
	isEmpty(): boolean {
		return this._.length === 0;
	}

}