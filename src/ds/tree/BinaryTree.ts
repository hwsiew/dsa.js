import BinaryNode from "./binaryNode";

export default class BinaryTree {

	_root: BinaryNode | null;

	/**
	 * @constructor
	 * @param {Array<*>} arr 
	 */
	constructor (arr: Array<any> = []) {

		if(!arr || !Array.isArray(arr))
			throw new Error('No array to initialize tree');

		let build = function(i: number): BinaryNode | null {

			if(i >=  arr.length || arr[i] === null) return null;

			let  node = new BinaryNode(arr[i]);

			node.left  = build(2*i + 1);
			node.right = build(2*i + 2); 

			return node;
		}
		
		this._root = build(0);
	
	}

	/**
	 * The root of the tree
	 */
	get root(){
		return this._root;
	}

	/**
	 * Calculate the height from a node (or root) to leaf
	 * 
	 * @param {?BinaryNode}
	 * @returns {number}
	 */
	height(node: BinaryNode | null = null): number {

		let curr = node ? node : this._root;

		let calc = function(node: BinaryNode | null): number{

			if(!node) return 0;

			return 1 + Math.max(calc(node.left),calc(node.right));
		}

		return calc(curr);
	}

	/**
	 * Get the number of nodes of a tree
	 * 
	 * @returns {number}
	 */
	size(): number{
		let helper = function(node: BinaryNode | null): number{
			if(!node) return 0;

			return 1 + helper(node.left) + helper(node.right);
		}

		return helper(this._root);
	}

	/**
	 * Check if tree is empty
	 * 
	 * @returns {boolean}
	 */
	isEmpty(): boolean{
		return this._root === null;
	}

	/**
	 * Traverse tree in-order
	 * 
	 * @returns {BinaryNode[]} an array of each element in sequence
	 */
	inOrder (): BinaryNode[] {

		let arr: Array<BinaryNode> = [];

		let helper = function(node: BinaryNode | null){

			if(!node) return null;

			helper(node.left);
			arr.push(node.data);
			helper(node.right);

		}
		helper(this._root);

		return arr;

	}

	/**
	 * Traverse tree pre-order
	 * 
	 * @returns {BinaryNode[]} an array of each element in sequence
	 */
	preOrder (): BinaryNode[]  {

		let arr: Array<BinaryNode> = [];

		let helper = function(node: BinaryNode | null){

			if(!node) return null;

			arr.push(node.data);
			helper(node.left);
			helper(node.right);

		}
		helper(this._root);

		return arr;

	}

	/**
	 * Traverse tree post-order
	 * 
	 * @returns {BinaryNode[]} an array of each element in sequence
	 */
	postOrder (): BinaryNode[]  {

		let arr: Array<BinaryNode> = [];

		let helper = function(node: BinaryNode | null){

			if(!node) return null;

			helper(node.left);
			helper(node.right);
			arr.push(node.data);

		}
		helper(this._root);

		return arr;

	}

	/**
	 * Check if tress is full
	 * 
	 * @returns {boolean}
	 */
	isFull (): boolean {

		let verify = function(node: BinaryNode | null): boolean {

			if(!node) return true;

			
			if(!node.left && !node.right) return true;
			
			if(node.left && node.right) return  verify(node.left) && verify(node.right);

			return false;

		}

		return verify(this._root);
	}

	/**
	 * Check if a tree is perfect
	 * 
	 * @returns {boolean}
	 */
	isPerfect (): boolean {

		let depth = 0;
		let curr  = this._root;

		// calculate the left most depth
		while(curr){
			depth++;
			curr = curr.left;
		}

		let verify = function(node: BinaryNode | null, level: number, maxDepth: number): boolean{

			if(!node) return true;

			if(!node.left && !node.right) 
				return level + 1 ===  maxDepth;

			if(node.left && node.right) 
				return verify(node.left, level+1, maxDepth) && verify(node.right, level+1, maxDepth);

			return false;
		}

		return verify(this._root, 0, depth);
	}

	/**
	 * Check if a tree is balanced
	 * 
	 * @returns {boolean}
	 */
	isBalance (): boolean {
		let verify = (node: BinaryNode | null): boolean => {
			if(!node) return true;

			let lheight = this.height(node.left);
			let rheight = this.height(node.right);

			if(Math.abs(lheight-rheight) > 1) return false;

			return verify(node.left) && verify(node.right);
		}

		return verify(this._root);
	}	

	/**
	 * Check if a tree is complete
	 * 
	 * @returns {boolean}
	 */
	isComplete (): boolean {
		let verify = (node: BinaryNode | null, index = 0): boolean => {

			if(!node) return true;

			if(index >= this.size()) return false;

			return verify(node.left, 2*index+1) && verify(node.right,2*index+2); 
		}

		return verify(this._root);
	}

	/**
	 * Check if tree1 is symmetric to tree2
	 * 
	 * @param {BinaryTree} tree1 
	 * @param {BinaryNode} tree2 
	 * @returns {boolean}
	 */
	static isSymmetric (tree1: BinaryTree, tree2: BinaryTree): boolean {

		let verify = function(root1: BinaryNode|null, root2: BinaryNode|null): boolean {

			if(!root1 && !root2) return true;

			if(root1 && root2)
				if(root1.data === root2.data){
					return verify(root1.left, root2.right) && verify(root1.right, root2.left); 
				}
			

			return false;

		}

		return verify(tree1.root,tree2.root);
	}

	/**
	 * Check if tree2 is a subtree of tree1
	 * 
	 * @param {BinaryTree} tree1 
	 * @param {BinaryTree} tree2 
	 * @returns {boolean}
	 */
	static isSubtree (tree1: BinaryTree, tree2: BinaryTree): boolean  {

		let verify = function(root1: BinaryNode|null, root2: BinaryNode|null): boolean {

			if(!root1 && !root2) return true;

			if(root1 && root2){
				if(root1.data !== root2.data) return verify(root1.left,root2) || verify(root1.right,root2);
				else return verify(root1.left,root2.left) && verify(root1.right,root2.right);
			 }
	
			return false;
		}
		
		return verify(tree1.root, tree2.root);
	}
}