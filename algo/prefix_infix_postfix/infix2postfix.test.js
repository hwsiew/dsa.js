const infix2postfix = require('./infix2postfix');
const { it, expect } = require('@jest/globals');

it('should work for empty infix', function(){
	let expression = '';
	expect(infix2postfix(expression)).toEqual('');
});

it('should work for an expression', function(){
	let expression = 'a+b*(c^d-e)^(f+g*h)-i';
	expect(infix2postfix(expression)).toEqual('abcd^e-fgh*+^*+i-');
	expression = '4+8*6-5/3-2*2+2';
	expect(infix2postfix(expression)).toEqual('486*+53/-22*-2+');
});

it('should throw an error for invalid infix expression', function(){
	let expression = 1+2-3;
	expect(() => infix2postfix(expression)).toThrow('Invalid infix expression!');
});