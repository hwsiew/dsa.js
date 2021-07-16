# Prefix vs Infix vs Postfix Expression

- Infix Expression : 1+2
- Prefix Expression : +12
- Postfix Expression : 12+

## Algorithm of Infix to Postfix Conversion
1. Scan the infix expression from left to right. 
2. If the scanned character is an operand, output it. 
3. Else, 
    1. If the precedence of the scanned operator is greater than the precedence of the operator in the stack(or the stack is empty or the stack contains a ‘(‘ ), push it. 
    2. Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator. After doing that Push the scanned operator to the stack. (If you encounter parenthesis while popping then stop there and push the scanned operator in the stack.) 
4. If the scanned character is an ‘(‘, push it to the stack. 
5. If the scanned character is an ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 
6. Repeat steps 2-6 until infix expression is scanned. 
7. Print the output 
8. Pop and output from the stack until it is not empty.

Reference : https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/

## Algorithm of Infix to Prefix Conversion
1. Reverse the infix expression i.e A+B*C will become C*B+A. Note while reversing each ‘(‘ will become ‘)’ and each ‘)’ becomes ‘(‘.
2. Obtain the “nearly” postfix expression of the modified expression. Note that, we have to pop all the operators from the stack which are greater in precedence than that of the scanned operator. Only in the case of “^” operator, we pop operators from the stack which are greater than or equal to in precedence.
3. Reverse the postfix expression. Hence in our example prefix is +A*BC

Reference : https://www.geeksforgeeks.org/convert-infix-prefix-notation/