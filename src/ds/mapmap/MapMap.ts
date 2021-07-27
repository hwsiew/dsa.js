/**
 * # MapMap
 * 
 * Nested version of Map with same API as Map to set and get element with nested keys.
 * 
 * ## Example
 * ```javascript
 * const { MapMap } = require('dsajs');
 * // or
 * // import { MapMap } from 'dsajs';
 * 
 * let ds = new MapMap();
 * let arr = [];
 * let obj = {};
 * // set a nested key to value 
 * ds.set('a', 1, arr, obj, 'value of any');
 * // get a nested key
 * ds.get('a', 1, arr, obj); // return 'value of any'
 * // check if a nested key exist
 * ds.has('a', 1, arr, obj); // true
 * ``` 
 */
export default class MapMap {
	private _: Map<any,any>;

	/**
	 * @constructor
	 */
	constructor(){
		this._ = new Map<any,any>();
	}

	/**
	 * Get the top level map size
	 * 
	 * @returns {number}
	 */
	get size(): number{
		return this._.size;
	}

	/**
	 * Check if a keys exist
	 * 
	 * @param {Array<any>} keys  
	 * @returns {boolean}
	 */
	has(...keys: Array<any>): boolean{
		let curr = this._;
		let i = 0;
		let n = keys.length;
		while(i < n){
			
			if(!(curr instanceof Map)) return false;
			
			let key = keys[i];
			if(!curr.has(key)) return false;
			curr = curr.get(key);

			i++;
		}

		return true;
	}

	/**
	 * Get the value of keys
	 * 
	 * @param {Array<any>} keys 
	 * @returns {undefined|any} the value of the keys if exists or undefined
	 */
	get(...keys: Array<any>) {

		if(!this.has(...keys)) return undefined;

		let curr = this._;
		let i = 0;
		let n = keys.length;
		while(i < n){
			curr = curr.get(keys[i++]);
		} 

		return i < n ? undefined : curr;
	}

	/**
	 * Set a value for keys
	 * 
	 * @param args argument(s) and the last argument is the value to set
	 * @returns {boolean} if set success
	 */
	set(...args: Array<any>): boolean{
		let value = args.pop();
		let keys  = args;

		let i = 0, 
				n = keys.length;
		let curr = this._;
		while(i < n){
			let key = keys[i++];

			if (i < n) { // key is not the last key
				if (curr.has(key)){
					let temp = curr.get(key);
					if(temp instanceof Map) curr = temp;
					else { // expansion value to Map
						let _map = new Map();
						curr.set(key, _map);
						curr = _map;
					}
				} else {
					let _map = new Map();
					curr.set(key, _map);
					curr = _map;
				}
			} else { // key is the last key, then assign value
				curr.set(key, value);
			}
		}

		return true;
	}

	/**
	 * Delete value of keys
	 * 
	 * @param keys 
	 * @returns {boolean} if delete success
	 */
	delete(...keys: Array<any>): boolean{
		if(!this.has(...keys)) return false;

		let n = keys.length;
		let i = 0;
		let curr = this._;

		while(i < n){
			let key = keys[i++];

			if(i < n) curr = curr.get(key);
			else curr.delete(key);
		}
		return true;
	}

	/**
	 * Remove all entries in mapmap
	 */
	clear(){
		this._ = new Map<any,any>();
	}
}