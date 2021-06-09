/**
 * Conver infix express to postfix
 * @param {string} infix 
 * @param {object<string,number>} precedence 	key of the object is the operator and corresponds to the precedence from 1 (1 smallest)
 * @returns {string} prefix expression
 */
function infix2prefix( infix , precedence = {}){

	if(typeof infix !== 'string')
		throw 'Invalid infix expression!';

	precedence = {
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
		'^': 3,
		...precedence
	};

	let stack = [];
	let prefix = '';

	let reverse = '';
	for(let s of infix){
		if(s == '(') s = ')';
		else if(s == ')') s = '(';
		reverse = s + reverse;
	}

	for(let s of reverse){
		if(s in precedence){ // is operator
			let last = stack.pop();
			if (last){
				while( last !== '(' && (s == '^' ? precedence[last] >= precedence[s] : precedence[last] > precedence[s]) ) {
					prefix += last;
					last = stack.pop();
				}
			}
			if(last) stack.push(last);
			stack.push(s);
		} else if(s == '(') {
			stack.push(s);
		} else if(s == ')') {
			let last = stack.pop();
			while( last && last != '('){
				prefix += last;
				last = stack.pop();
			}
		} else {
			prefix += s;
		}
	}

	while(stack.length){
		prefix += stack.pop();
	}

	prefix = Array.from(prefix).reverse().join('');

	return prefix.replace(/ /g,'');
}

module.exports = infix2prefix;