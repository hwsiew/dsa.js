const { Tree, TreeNode } = require('./Tree');

class BinarySearchTree extends Tree{

	constructor(){
		super()
	}

	insert(num){

		const add = function(root){
			if(!root) return new TreeNode(num);
			if (num < root.value) {
				root.left = add(root.left);
			} else {
				root.right = add(root.right);
			}

			return root;
		}

		this.root = add(this.root);
	}

	search(num){
		const find = function(root){

			if(!root) return -1;
		
			if(root.value == num) return root;

			if(num < root.value) return find(root.left);
			
			if(num > root.value) return find(root.right);

		}

		return find(this.root);
	}

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