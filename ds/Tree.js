class TreeNode {
	constructor(val, left = null, right = null){
		this.value = val;
		this.left  = left;
		this.right = right
	}
}

class Tree {
	constructor(arr){
		this.root = null;
		this.fromArray(arr);
	}

	get size(){

		const count = function(root){

			if(!root) return 0;

			return 1 + count(root.left) + count(root.right);

		}

		return count(this.root);

	}

	calcHeight(root){

		if(!root) return 0;

		return Math.max( this.calcHeight(root.left), this.calcHeight(root.right) ) + 1;
	
	}

	fromArray(arr){

		const build = function(root, i){

			if(i < arr.length && arr[i] !== null) {
				root = new TreeNode(arr[i]);
				root.left = build(root.left, 2 * i + 1);
				root.right= build(root.right, 2 * i + 2);
			}

			return root;
		}

		this.root = build(this.root, 0);

	}

	inOrder(){
		let seq = [];
		const travel = function(root){

			if(!root) return;

			travel(root.left);
			seq.push(root.value);
			travel(root.right);
		}

		travel(this.root);

		return seq;
	}

	preOrder(){
		let seq = [];
		const travel = function(root){

			if(!root) return;

			seq.push(root.value);
			travel(root.left);
			travel(root.right);
		}

		travel(this.root);
		return seq;
	}

	postOrder(){
		let seq = []
		const travel = function(root){
			if(!root) return;

			travel(root.left);
			travel(root.right);
			seq.push(root.value);
		}

		travel(this.root);

		return seq;
	}

	isFull(){

		const verify = function(root){

			if(!root) return true;

			if(!root.left && !root.right) return true;

			if(root.left && root.right) 
				return verify(root.left) && verify(root.right);

			return false

		}

		return verify(this.root);

	}

	isComplete(){
		const verify = function(root, index, numOfNodes){

			if(!root) return true;

			if(index >= numOfNodes) return false;

			return verify(root.left, 2 * index + 1, numOfNodes) &&
				verify(root.right, 2 * index + 2, numOfNodes);

		}

		return verify(this.root,0,this.size);
	}

	isPerfect(){

		const calcDepth = function(node){
			let d = 0;
			while(node){
				d++;
				node = node.left
			}
			return d;
		}

		const verify = function(root, depth, level = 0){

			if(!root) return true;

			// if all leaves on the same lever 
			if(!root.left && !root.right) return depth == level+1;
			
			// missing either node in internal node
			if(!root.left || !root.right) return false;

			return verify(root.left, depth, level+1) && verify(root.right, depth, level+1);

		};

		return verify(this.root, calcDepth(this.root));
	}

	isBalanced(){

		const verify = (root) => {

			if(!root) return true;

			let lh = this.calcHeight(root.left);
			let rh = this.calcHeight(root.right);

			if(Math.abs(lh-rh) > 1) return false;

			return verify(root.left) && verify(root.right);

		}

		return verify(this.root);

	}

}

module.exports = {
	TreeNode,
	Tree
}