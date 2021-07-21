import BinaryTree from "./BinaryTree";
import BinaryNode from "./binaryNode";

/**
 * A function takes in two arguments and reture a number
 * 
 * @param {*} a a node of tree
 * @param {*} b the data to compare
 * @returns {number} -1 if a>b, 0 if a==b, 1 if b>a
 */
type CompareFunction = (a: any,b: any) => number;

/**
 * Binary Search Tree
 * 
 * ### Example
 * ```javascript
 * const BinarySearchTree = require('dsajs');
 * 
 * let bst = new BinarySearchTree();
 * bst.insert(1);
 * bst.insert(2);
 * ...
 * ```
 */
export default class BinarySearchTree extends BinaryTree {

	_compareFn: CompareFunction;

	/**
	 * @constructor 
	 * @param {CompareFunction} compareFn 
	 */
	constructor(compareFn?: CompareFunction){
		super();

		this._compareFn = compareFn ? compareFn : function(a,b){

			if(a<b) return 1;
			else if(a>b) return -1;
			else return 0;

		};
	}

	/**
	 * Insert data into binary search tree
	 * 
	 * @param {*} data 
	 */
	insert(data: any){
		let helper = function(node: BinaryNode | null, compare: CompareFunction){

			if (!node){
				node = new BinaryNode(data);
			} else if (compare(node.data,data) > 0){
				node.right = helper(node.right,compare);
			} else {
				node.left = helper(node.left,compare);
			}

			return node;
		}

		this._root = helper(this._root, this._compareFn);
	}

	/**
	 * Search a value(data) in binary search tree
	 *  
	 * @param {*} data 
	 * @returns {BinaryNode|null} null if not found in binary tree 
	 */
	search(data: any){
		let compare = this._compareFn;
		let find = function(node: BinaryNode | null): BinaryNode | null {

			if(!node) return null;

			if(compare(node.data,data) > 0) return find(node.right);
			else if(compare(node.data,data) < 0) return find(node.left);
			else return node;

		}

		return find(this._root);
	}

	/**
	 * Delete data from tree 
	 * 
	 * @param {*} data 
	 */
	delete(data: any){
		let compare = this._compareFn;

		let helper = function(node: BinaryNode | null, _data = data): BinaryNode | null{

			if(!node) return node;

			if(compare(node.data,_data) > 0){
				node.right = helper(node.right, _data);
			} else if(compare(node.data,_data) < 0){
				node.left = helper(node.left, _data);
			} else {
				// node is the target

				if(node.left && !node.right){
					let temp = node.left;
					node = null;
					return temp;
				} else if(node.right && !node.left){
					let temp = node.right;
					node = null;
					return temp
				} 

				if(!node.left && !node.right) return null;

				// node has both left and right or node
				let curr = node.right;
				
				while(curr && curr.left){
					curr = curr.left;
				}

				node.data = curr?.data;

				node.right = helper(node.right, curr?.data);
			}

			return node;
		}

		this._root = helper(this.root);
	}
}