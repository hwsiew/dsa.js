const { it, expect } = require('@jest/globals');
const {Tree} = require('./Tree');

let arr  = [1,12,9,5,6]
let tree = new Tree(arr);

it('should travel in order', function(){
	expect(tree.inOrder()).toEqual([5,12,6,1,9]);
});

it('should travel pre order', function(){
	expect(tree.preOrder()).toEqual([1,12,5,6,9]);
});

it('should travel post order', function(){
	expect(tree.postOrder()).toEqual([5,6,12,9,1]);
});