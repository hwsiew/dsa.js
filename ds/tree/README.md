# Tree

A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.

## Tree Terminologies
### Node
A node is an entity that contains a key or value and pointers to its child nodes.

### Edge
It is the link between any two nodes.

### Root
It is the topmost node of a tree.

### Height of a Node
The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).

### Depth of a Node
The depth of a node is the number of edges from the root to the node.

### Height of a Tree
The height of a Tree is the height of the root node or the depth of the deepest node.

### Degree of a Node
The degree of a node is the total number of branches of that node.

## Tree Traversal
1. inorder
	1. First, visit all the nodes in the left subtree
	2. Then the root node
	3. Visit all the nodes in the right subtree
2. preorder
	1. Visit root node
	2. Visit all the nodes in the left subtree
	3. Visit all the nodes in the right subtree
3. postorder
	1. Visit all the nodes in the left subtree
	2. Visit all the nodes in the right subtree
	3. Visit the root node

## Types of Binary Tree
1. Full Binary Tree: A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.
2. Perfect Binary Tree: A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.
3. Complete Binary Tree: A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.
4. Balanced Binary Tree: A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.