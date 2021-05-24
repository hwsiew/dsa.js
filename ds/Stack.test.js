const { it, expect } = require('@jest/globals');
const Stack = require('./Stack');

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);

it('should add to stack', function(){
	expect(s.stack).toEqual([1,2,3,4,5]);
});

it('should remove the top of stack', function(){
	s.pop();
	expect(s.stack).toEqual([1,2,3,4]);
});

it('should return the top of stack', function(){
	expect(s.peek()).toEqual(4);
});