const { it, expect } = require('@jest/globals');
const BinarySearchTree = require('./BinarySearchTree');

let b = new BinarySearchTree();

b.insert(8);
b.insert(3);
b.insert(1);
b.insert(6);
b.insert(7);
b.insert(10);
b.insert(14);
b.insert(4);

it('should add nodes binary tree', function(){
	expect(b.inOrder()).toEqual([1,3,4,6,7,8,10,14]);
});

it('should search an existing node in tree', function(){
	expect(b.search(4).value).toEqual(4);
});

it('should not found a node in tree', function(){
	expect(b.search(100)).toBeNull();
});

it('should delete a leave node in tree', function(){
	b.delete(4);
	expect(b.inOrder()).toEqual([1,3,6,7,8,10,14]);
});

it('should delete a node with one child in tree', function(){
	b.delete(6);
	expect(b.inOrder()).toEqual([1,3,7,8,10,14]);
});

it('should delete a node with two child in tree', function(){
	b.delete(3);
	expect(b.inOrder()).toEqual([1,7,8,10,14]);
});