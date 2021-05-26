const { expression } = require('@babel/template');
const { it, expect } = require('@jest/globals');
const {Tree} = require('./Tree');

let arr  = [1,12,9,5,6];
let tree = new Tree(arr);

it('works for null value in array', function(){
	let arr = [1,2,3,6,4,null,5];
	let tree = new Tree(arr);

	expect(tree.inOrder()).toEqual([6,2,4,1,3,5]);
})

it('should travel in order', function(){
	expect(tree.inOrder()).toEqual([5,12,6,1,9]);
});

it('should travel pre order', function(){
	expect(tree.preOrder()).toEqual([1,12,5,6,9]);
});

it('should travel post order', function(){
	expect(tree.postOrder()).toEqual([5,6,12,9,1]);
});

it('is a full binary tree', function(){

	let arr = [1,2,3,4,5,6,7];
	let tree = new Tree(arr);

	expect(tree.isFull()).toBe(true);

});

it('is a not full binary tree', function(){

	let arr = [1,2,3,4,5,6,7,8];
	let tree = new Tree(arr);

	expect(tree.isFull()).toBe(false);;

});

it('is a complete binary tree', function(){
	let arr = [1,2,3,4,5,6];
	let tree = new Tree(arr);

	expect(tree.isComplete()).toBe(true);
});

it('is not a complete binary tree', function(){
	let arr = [1,2,3,4,5,null,6];
	let tree = new Tree(arr);

	expect(tree.isComplete()).toBe(false);
});

it('is a perfect binary tree', function(){
	
	let tree = new Tree([1,2,3,4,5,6,7]);

	expect(tree.isPerfect()).toBe(true);
});

it('is not a perfect binary tree', function(){
	let tree = new Tree([1,2,3,4,5,6,7,8]);

	expect(tree.isPerfect()).toBe(false);
});

it('is a balanced binary tree', function(){
	
	let tree = new Tree([1,2,3,4,5,6,7]);

	expect(tree.isBalanced()).toBe(true);
});

it('is not a balanced binary tree', function(){
	let tree = new Tree([1,2,3,4,5,null,null,8]);

	expect(tree.isBalanced()).toBe(false);
});

it('is a symmetric tree',function(){
	let tree = new Tree([1,2,2,3,4,4,3]);
	expect(tree.isSymmetric()).toBe(true);
});

it('is not a symmetric tree',function(){
	let tree = new Tree([1,2,2,null,3,null,3]);
	expect(tree.isSymmetric()).toBe(false);
});