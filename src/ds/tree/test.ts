import BinaryTree from ".";

describe('Binary Tree Tests Cases',function(){
	it('should check if tree is empty', function(){
		let ds = new BinaryTree([]);
		expect(ds.isEmpty()).toBeTruthy();
	});

	it('should build a tree from array', function(){
		let ds = new BinaryTree([1,null,2,null,null,5,3]);
		expect(ds.size()).toBe(4);
	});

	it('should traverse inorder', function(){
		let ds = new BinaryTree(['A','B','C','D','E','F','G']);
		expect(ds.inOrder()).toEqual(['D','B','E','A','F','C','G']);
	});

	it('should traverse preorder', function(){
		let ds = new BinaryTree(['A','B','C','D','E','F','G']);
		expect(ds.preOrder()).toEqual(['A','B','D','E','C','F','G']);
	});

	it('should traverse postorder', function(){
		let ds = new BinaryTree(['A','B','C','D','E','F','G']);
		expect(ds.postOrder()).toEqual(['D','E','B','F','G','C','A']);
	});

	it('should test if a tree is full', function(){
		let isFull = new BinaryTree([1,2,3]);
		let isNotFull = new BinaryTree([1,null,2,null,null,3,4]);
		let isEmpty = new BinaryTree([]);
		expect(isEmpty.isFull()).toBeTruthy();
		expect(isFull.isFull()).toBeTruthy();
		expect(isNotFull.isFull()).toBeFalsy();
	});

	it('should test if a tree is perfect', function(){
		let perfectTree = new BinaryTree([1,2,3,4,5,6,7]);
		let notPerfectTree = new BinaryTree([1,null,2,null,null,3,4]);
		let emptyTree = new BinaryTree([]);
		expect(emptyTree.isPerfect()).toBeTruthy();
		expect(perfectTree.isPerfect()).toBeTruthy();
		expect(notPerfectTree.isPerfect()).toBeFalsy();
	});

	it('should test if a tree is complete', function(){
		let validTree = new BinaryTree([1,2,3,4,5,6,7,8]);
		let notValidTree = new BinaryTree([1,null,2,null,null,3,4]);
		let emptyTree = new BinaryTree([]);
		expect(emptyTree.isComplete()).toBeTruthy();
		expect(validTree.isComplete()).toBeTruthy();
		expect(notValidTree.isComplete()).toBeFalsy();
	});

	it('should test if a tree is balance', function(){
		let validTree = new BinaryTree([1,2,3,4,5,6,7]);
		let notValidTree = new BinaryTree([1,2,3,4,5,null,null,8]);
		let emptyTree = new BinaryTree([]);
		expect(emptyTree.isBalance()).toBeTruthy();
		expect(validTree.isBalance()).toBeTruthy();
		expect(notValidTree.isBalance()).toBeFalsy();
	});

	it('should check if trees are symmetric', function(){
		let tree1 = new BinaryTree([1,2,2,3,4,4,3]);
		let tree2 = new BinaryTree([1,2,2,3,4,3,4]);
		let tree3 = new BinaryTree([1,2,2,4,3,4,3]);
		let tree4 = new BinaryTree([1,2,2]);
		expect(BinaryTree.isSymmetric(tree1,tree1)).toBeTruthy();
		expect(BinaryTree.isSymmetric(tree2,tree3)).toBeTruthy();
		expect(BinaryTree.isSymmetric(tree1,tree4)).toBeFalsy();
	});

	it('should check if trees are subtree', function(){
		let tree1 = new BinaryTree([1,2,2,3,4,4,3]);
		let tree2 = new BinaryTree([2,4,3]);
		let tree3 = new BinaryTree([3,4,5,1,2,null,null,null,null,0])
		let tree4 = new BinaryTree([4,1,2])
		expect(BinaryTree.isSubtree(tree1,tree1)).toBeTruthy();
		expect(BinaryTree.isSubtree(tree1,tree2)).toBeTruthy();
		expect(BinaryTree.isSymmetric(tree3,tree4)).toBeFalsy();
	});

})