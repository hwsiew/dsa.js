type CompareFunction = (a: any, b:any) => boolean

/**
 * ## Heap
 * 
 * A Heap is a special Tree-based data structure in which the tree is a complete binary tree
 * 
 * ### Examples
 * ```javascript
 * const { Heap } = require('dsajs');
 * // or  
 * // import { Heap } from 'dsajs';
 * let maxHeap = new Heap((a,b) => b>a);
 * let minHeap = new Heap((a,b) => a>b);
 * ```
 */
export default class Heap {

	private _:Array<any>;
	private compareFn: CompareFunction;

	/**
	 * @constructor
	 * @param compareFn (a,b) => return true if b should be before a else false
	 */
	constructor(compareFn: CompareFunction){
		this._ = [];
		this.compareFn = compareFn;
	}

	/**
	 * The size of heap
	 */
	get size(): number{
		return this._.length;
	}

	/**
	 * The top element of heap
	 */
	get top(){
		if(this.isEmpty()) 
			return undefined;
		else 
			return this._[0];
	}

	/**
	 * Check if heap is empty
	 * @returns {boolean}
	 */
	isEmpty(): boolean{
		return this.size === 0;
	}

	/**
	 * Add an element to heap
	 * @param data 
	 */
	add(data: any){
		this._.push(data);
		this.heapify();
	}

	/**
	 * Clear all element from heap
	 */
	clear(): void{
		this._ = [];
	}

	/**
	 * Remove the top of heap and return
	 * 
	 * @returns the top element or undefined if heap is empty
	 */
	popTop(){
		if(this.isEmpty())
			return undefined;
		else {
			[this._[0],this._[this._.length-1]] =[this._[this._.length-1],this._[0]];
			let top = this._.pop();
			this.heapify();
			return top;
		} 
	}
	
	/**
	 * The process of building a heap tree
	 * @returns 
	 */
	heapify(){
		if(this.isEmpty()) return;
		let last = Math.floor(this.size/2 - 1);
		while(last >= 0){
			let target = last;
			let left   = 2*last + 1;
			let right  = 2*last + 2;
			
			if(left < this.size && this.compareFn(this._[target],this._[left])) target = left;
			if(right < this.size && this.compareFn(this._[target],this._[right])) target = right;

			if(last != target) [this._[last], this._[target]] = [this._[target], this._[last]];

			last--;
		}
	}

	toArray(){
		return this._;
	}
}