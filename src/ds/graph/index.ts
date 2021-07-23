import { LinkedList } from "../..";

/**
 * ## Graph
 * 
 * ## Examples
 * ```javascript
 * const { Graph } = require('dsajs');
 * // or  
 * import { Graph } from 'dsajs';
 * 
 * let ds = new Graph();
 * ```
 */
export default class Graph{
	private _:Map<any,any>;
	/**
	 * @constructor
	 */
	constructor(){
		this._ = new Map();
	}

	/**
	 * Add a vertex to the graph
	 * 
	 * @param v vertex
	 * @returns 
	 */
	addVertex(v: any) {
		if(this._.has(v)) return; // do nothing is vertex exist

		let list = new LinkedList();
		this._.set(v, list);
	}
	
	/**
	 * Get a vertex if available 
	 * 
	 * @param vertex 
	 * @returns undefined if not vertex found
	 */
	getVertex(vertex: any): LinkedList | undefined{
		if(!this._.has(vertex)) return undefined;
		return this._.get(vertex);
	}

	/**
	 * Delete a vertex if available
	 * 
	 * @param {*} v 
	 * @returns {boolean} if vertex is deleted successfully
	 */
	deleteVertex(v: any): boolean{
		if(!this._.has(v)) return false; 

		this._.delete(v);
		this._.forEach((list,key) => {
			let compareFn = (x:any) => x === v;
			list.delete(compareFn);
		});

		return true;
	}

	/**
	 * Add an edge between from and to
	 * 
	 * @param {*} from need to match the type of vertex added
	 * @param {*} to need to match the type of vertex added
	 */
	addEdge(from: any, to: any){
		if(!this._.has(from) || !this._.has(to)) 
			throw new Error('Vertex is not found');
		
		let list = this._.get(from);
		list.append(to);
	}

	/**
	 * Remove an edge between from and to
	 * 
	 * @param {*} from need to match the type of vertex added
	 * @param {*} to need to match the type of vertex added
	 */
	removeEdge(from: any, to: any){
		if(!this._.has(from) || !this._.has(to)) 
			throw new Error('Vertex is not found');

		let list = this._.get(from);
		list.delete((x:any) => x === to);
	}
	
	/**
	 * Check if there exists a path between from and to
	 * 
	 * @param {*} from 
	 * @param {*} to 
	 * @returns {boolean}
	 */
	hasPath(from: any, to: any): boolean{
		if(!this._.has(from) || !this._.has(to))
			return false;
		
		let stack = this._.get(from).toArray();
		let visited = new Set([from]);

		while(stack.length){

			let node = stack.shift();

			if(visited.has(node)) continue;

			if(node === to) return true;

			visited.add(node);
			stack = stack.concat(this._.get(node).toArray());
			
		}

		return false;
	}

}