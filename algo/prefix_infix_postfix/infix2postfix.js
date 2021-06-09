/**
 * 
 * @param {string} infix 
 * @param {object<string,number>} precedence key of the object is the operator and corresponds to the precedence from 1 (1 smallest)
 * @returns {string} postfix expression
 */
function infix2postfix(infix, precedence = {}){

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
	let postfix = '';

	for(let s of infix){
		if(s in precedence){ // is operator
			if(stack.length == 0) stack.push(s);
			else {
				let last = stack.pop();
				while( last != '(' && precedence[last] >= precedence[s] ){
					postfix += last;
					last = stack.pop();
				}
				if(last) stack.push(last);
				stack.push(s);
			}
		} else if (s == "("){
			stack.push(s);
		} else if (s == ")"){
			let last = stack.pop();
			while(last != "("){
				postfix += last;
				last = stack.pop();
			}
		}else postfix += s;
	}

	while(stack.length){
		postfix += stack.pop();
	}

	return postfix.replace(/ /g,'');

}

module.exports = infix2postfix;