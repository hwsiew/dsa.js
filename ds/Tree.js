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

	fromArray(arr){

		const build = function(root, i){

			if(i < arr.length) {
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

}

module.exports = {
	TreeNode,
	Tree
}