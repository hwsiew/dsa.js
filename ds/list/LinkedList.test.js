const { it, expect } = require('@jest/globals');
const LinkedList = require('./LinkedList');

it('should work for push and pop', function(){

	let a = new LinkedList();
	a.push(1);
	expect(a.print()).toEqual('1');
	a.push(4);
	expect(a.print()).toEqual('1->4');
	a.push(5);
	expect(a.print()).toEqual('1->4->5');
	a.push(7);
	expect(a.print()).toEqual('1->4->5->7');
	a.pop();
	expect(a.print()).toEqual('1->4->5');
	a.pop();
	expect(a.print()).toEqual('1->4');
	a.push(9);
	expect(a.print()).toEqual('1->4->9');
	a.push(10);
	expect(a.print()).toEqual('1->4->9->10');

});

it('should work for empty pop', function(){
	let a = new LinkedList();
	expect(a.pop()).toBeNull();
});

it('should work for shift',function(){
	let a = new LinkedList([1,2,3,4]);
	expect(a.shift().value).toBe(1);
	expect(a.print()).toEqual('2->3->4');
	expect(a.shift().value).toBe(2);
	expect(a.print()).toEqual('3->4');
});

it('should work for unshift',function(){
	let a = new LinkedList([1,2,3,4]);
	a.unshift(...[5,6,7]);
	expect(a.print()).toBe('7->6->5->1->2->3->4');
})