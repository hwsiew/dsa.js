const infix2prefix = require('./infix2prefix');
const { it, expect } = require('@jest/globals');

it('should work for empty infix', function(){
	let expression = '';
	expect(infix2prefix(expression)).toEqual('');
});

it('should work for an expression', function(){
	let expression = 'A*B+C/D';
	expect(infix2prefix(expression)).toEqual('+*AB/CD');
	expression = '(A - B/C) * (A/K-L)';
	expect(infix2prefix(expression)).toEqual('*-A/BC-/AKL');
	expression = "x+y*z/w+u";
	expect(infix2prefix(expression)).toEqual('++x/*yzwu');
});

it('should throw an error for invalid infix expression', function(){
	let expression = 1+2-3;
	expect(() => infix2prefix(expression)).toThrow('Invalid infix expression!');
});