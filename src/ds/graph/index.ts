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
	_:Map<any,any>;

	constructor(){
		this._ = new Map();
	}

	addVertex(v: any){
		if(this._.has(v)) return; // do nothing is vertex exist

		let list = new LinkedList();
		this._.set(v, list);
	}

	getVertex(vertex: any): LinkedList | undefined{
		if(!this._.has(vertex)) return undefined;
		return this._.get(vertex);
	}

	deleteVertex(v: any): boolean{
		if(!this._.has(v)) return false; 

		this._.delete(v);
		this._.forEach((list,key) => {
			let compareFn = (x:any) => x === v;
			list.delete(compareFn);
		});

		return true;
	}

	addEdge(from: any, to: any){
		if(!this._.has(from) || !this._.has(to)) 
			throw new Error('Vertex is not found');
		
		let list = this._.get(from);
		list.append(to);
	}

	removeEdge(from: any, to: any){
		if(!this._.has(from) || !this._.has(to)) 
			throw new Error('Vertex is not found');

		let list = this._.get(from);
		list.delete((x:any) => x === to);
	}
	
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