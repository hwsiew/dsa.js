const { it, expect } = require('@jest/globals');
const Heap = require('./Heap');

it('should add node to heap', function(){

	let h = new Heap();
	h.insert(5);
	expect(h.data).toEqual([5]);
	h.insert(3);
	expect(h.data).toEqual([5,3]);
	h.insert(4);
	expect(h.data).toEqual([5,3,4]);
	h.insert(6);
	expect(h.data).toEqual([6,5,4,3]);
	h.insert(1);
	expect(h.data).toEqual([6,5,4,3,1]);
	h.insert(2);
	expect(h.data).toEqual([6,5,4,3,1,2]);

})

it('should find the index of a node', function(){

	let h = new Heap();
	h.insert(5);
	h.insert(3);
	h.insert(4);
	h.insert(6);
	h.insert(1);
	h.insert(2);
	expect(h.find(3)).toBe(3);

});

it('should not find a index for a node', function(){

	let h = new Heap();
	h.insert(5);
	h.insert(3);
	h.insert(4);
	h.insert(6);
	h.insert(1);
	h.insert(2);
	expect(h.find(10)).toBe(-1);

});

it('should delete a node', function(){

	let h = new Heap();
	h.insert(5);
	h.insert(3);
	h.insert(4);
	h.insert(6);
	h.insert(1);
	h.insert(2);
	h.delete(6);
	expect(h.data).toEqual([5,2,4,3,1]);

});

it('should create min heap', function(){

	let h = new Heap(false);
	h.insert(5);
	expect(h.data).toEqual([5]);
	h.insert(3);
	expect(h.data).toEqual([3,5]);
	h.insert(4);
	expect(h.data).toEqual([3,5,4]);
	h.insert(6);
	expect(h.data).toEqual([3,5,4,6]);
	h.insert(2);
	expect(h.data).toEqual([2,3,4,6,5]);
	h.insert(1);
	expect(h.data).toEqual([1,3,2,6,5,4]);

})