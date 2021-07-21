import BinaryTree from "./BinaryTree";
import BinaryNode from "./binaryNode";
import BinarySearchTree from "./BinarySearchTree";
describe('Binary Search Tree Test Cases', function () {
    it('should add node to search tree', function () {
        var ds = new BinarySearchTree();
        ds.insert(5);
        ds.insert(4);
        ds.insert(6);
        expect(ds.size()).toBe(3);
    });
    it('should search a node in tree', function () {
        var ds = new BinarySearchTree();
        ds.insert(8);
        ds.insert(3);
        ds.insert(10);
        ds.insert(1);
        ds.insert(6);
        ds.insert(7);
        ds.insert(14);
        expect(ds.size()).toBe(7);
        expect(ds.search(14)).toEqual(new BinaryNode(14));
    });
    it('should delete a node in tree', function () {
        var ds = new BinarySearchTree();
        ds.insert(8);
        ds.insert(3);
        ds.insert(10);
        ds.insert(1);
        ds.insert(6);
        ds.insert(7);
        ds.insert(9);
        expect(ds.size()).toBe(7);
        ds.delete(3); // has both left and right node
        expect(ds.size()).toBe(6);
        ds.delete(6); // has only right node
        expect(ds.size()).toBe(5);
        ds.delete(20); // element not in tree
        expect(ds.size()).toBe(5);
        ds.delete(10); // has only left node
        expect(ds.size()).toBe(4);
        ds.delete(9); // has no children nodes
        expect(ds.size()).toBe(3);
        ds.insert(14);
        ds.delete(8); // root node
        expect(ds.size()).toBe(3);
    });
});
describe('Binary Tree Tests Cases', function () {
    it('should check if tree is empty', function () {
        var ds = new BinaryTree([]);
        expect(ds.isEmpty()).toBeTruthy();
    });
    it('should build a tree from array', function () {
        var ds = new BinaryTree([1, null, 2, null, null, 5, 3]);
        expect(ds.size()).toBe(4);
    });
    it('should traverse inorder', function () {
        var ds = new BinaryTree(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.inOrder()).toEqual(['D', 'B', 'E', 'A', 'F', 'C', 'G']);
    });
    it('should traverse preorder', function () {
        var ds = new BinaryTree(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.preOrder()).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'G']);
    });
    it('should traverse postorder', function () {
        var ds = new BinaryTree(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.postOrder()).toEqual(['D', 'E', 'B', 'F', 'G', 'C', 'A']);
    });
    it('should test if a tree is full', function () {
        var isFull = new BinaryTree([1, 2, 3]);
        var isNotFull = new BinaryTree([1, null, 2, null, null, 3, 4]);
        var isEmpty = new BinaryTree([]);
        expect(isEmpty.isFull()).toBeTruthy();
        expect(isFull.isFull()).toBeTruthy();
        expect(isNotFull.isFull()).toBeFalsy();
    });
    it('should test if a tree is perfect', function () {
        var perfectTree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);
        var notPerfectTree = new BinaryTree([1, null, 2, null, null, 3, 4]);
        var emptyTree = new BinaryTree([]);
        expect(emptyTree.isPerfect()).toBeTruthy();
        expect(perfectTree.isPerfect()).toBeTruthy();
        expect(notPerfectTree.isPerfect()).toBeFalsy();
    });
    it('should test if a tree is complete', function () {
        var validTree = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
        var notValidTree = new BinaryTree([1, null, 2, null, null, 3, 4]);
        var emptyTree = new BinaryTree([]);
        expect(emptyTree.isComplete()).toBeTruthy();
        expect(validTree.isComplete()).toBeTruthy();
        expect(notValidTree.isComplete()).toBeFalsy();
    });
    it('should test if a tree is balance', function () {
        var validTree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);
        var notValidTree = new BinaryTree([1, 2, 3, 4, 5, null, null, 8]);
        var emptyTree = new BinaryTree([]);
        expect(emptyTree.isBalance()).toBeTruthy();
        expect(validTree.isBalance()).toBeTruthy();
        expect(notValidTree.isBalance()).toBeFalsy();
    });
    it('should check if trees are symmetric', function () {
        var tree1 = new BinaryTree([1, 2, 2, 3, 4, 4, 3]);
        var tree2 = new BinaryTree([1, 2, 2, 3, 4, 3, 4]);
        var tree3 = new BinaryTree([1, 2, 2, 4, 3, 4, 3]);
        var tree4 = new BinaryTree([1, 2, 2]);
        expect(BinaryTree.isSymmetric(tree1, tree1)).toBeTruthy();
        expect(BinaryTree.isSymmetric(tree2, tree3)).toBeTruthy();
        expect(BinaryTree.isSymmetric(tree1, tree4)).toBeFalsy();
    });
    it('should check if trees are subtree', function () {
        var tree1 = new BinaryTree([1, 2, 2, 3, 4, 4, 3]);
        var tree2 = new BinaryTree([2, 4, 3]);
        var tree3 = new BinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
        var tree4 = new BinaryTree([4, 1, 2]);
        expect(BinaryTree.isSubtree(tree1, tree1)).toBeTruthy();
        expect(BinaryTree.isSubtree(tree1, tree2)).toBeTruthy();
        expect(BinaryTree.isSymmetric(tree3, tree4)).toBeFalsy();
    });
});
