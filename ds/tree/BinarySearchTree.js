const { Tree, TreeNode } = require('./Tree');

/**
 * Class representing a binary tree node
 * @extends TreeNode
 */
class BinaryTreeNode extends TreeNode {
	/**
	 * Create a binary tree node
	 * @param {number} val 
	 * @param {BinaryTreeNode} left 
	 * @param {BinarySearchTree} right 
	 */
	constructor(val, left = null, right = null){
		super(val, left, right);
		this.height = 0;
	}
}

/**
 * Class representing a binaray tree
 * @extends Tree
 */
class BinarySearchTree extends Tree{
	/**
	 * Create an empty tree
	 */
	constructor(){
		super()
	}

	/**
	 * Insert a node with value into binary tree
	 * @param {number} num 
	 */
	insert(num){

		const add = function(root){
			if(!root){
				return new BinaryTreeNode(num);
			} else if (num < root.value) {
				root.left = add(root.left);
			} else {
				root.right = add(root.right);
			}

			root.height = 1 + Math.max( 
								root.left ? root.left.height : 0,
								root.right ? root.right.height : 0);

			return root;
		}

		this.root = add(this.root);
	}

	/**
	 * Find a number in the binary search tree
	 * @param {number} num 
	 * @returns {?BinaryTreeNode}
	 */
	search(num){
		const find = function(root){

			if(!root) return null;
		
			if(root.value == num) return root;

			if(num < root.value) return find(root.left);
			
			if(num > root.value) return find(root.right);

		}

		return find(this.root);
	}

	/**
	 * Delete a node with value = num
	 * @param {number} num 
	 */
	delete(num){

		let self = this;
		const loop = function(root, n = num){

			if(!root) return root;

			if(n < root.value)
				root.left = loop(root.left);
			else if(n > root.value)
				root.right = loop(root.right);
			else{

				if(!root.left){
					let temp = root.right
					root = null;
					return temp;
				} else if(!root.right){
					let temp = root.left
					root = null;
					return temp;
				}

				let temp = root.right;

				while(temp.left) temp = temp.left;

				root.value = temp.value;

				root.right = loop(root.right, temp.value);

			}

			return root;

		}

		this.root = loop(this.root);
 
	}
}

module.exports = BinarySearchTree;