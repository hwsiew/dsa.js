"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
describe('Binary Tree Tests Cases', function () {
    it('should check if tree is empty', function () {
        var ds = new _1.default([]);
        expect(ds.isEmpty()).toBeTruthy();
    });
    it('should build a tree from array', function () {
        var ds = new _1.default([1, null, 2, null, null, 5, 3]);
        expect(ds.size()).toBe(4);
    });
    it('should traverse inorder', function () {
        var ds = new _1.default(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.inOrder()).toEqual(['D', 'B', 'E', 'A', 'F', 'C', 'G']);
    });
    it('should traverse preorder', function () {
        var ds = new _1.default(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.preOrder()).toEqual(['A', 'B', 'D', 'E', 'C', 'F', 'G']);
    });
    it('should traverse postorder', function () {
        var ds = new _1.default(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
        expect(ds.postOrder()).toEqual(['D', 'E', 'B', 'F', 'G', 'C', 'A']);
    });
    it('should test if a tree is full', function () {
        var isFull = new _1.default([1, 2, 3]);
        var isNotFull = new _1.default([1, null, 2, null, null, 3, 4]);
        var isEmpty = new _1.default([]);
        expect(isEmpty.isFull()).toBeTruthy();
        expect(isFull.isFull()).toBeTruthy();
        expect(isNotFull.isFull()).toBeFalsy();
    });
    it('should test if a tree is perfect', function () {
        var perfectTree = new _1.default([1, 2, 3, 4, 5, 6, 7]);
        var notPerfectTree = new _1.default([1, null, 2, null, null, 3, 4]);
        var emptyTree = new _1.default([]);
        expect(emptyTree.isPerfect()).toBeTruthy();
        expect(perfectTree.isPerfect()).toBeTruthy();
        expect(notPerfectTree.isPerfect()).toBeFalsy();
    });
    it('should test if a tree is complete', function () {
        var validTree = new _1.default([1, 2, 3, 4, 5, 6, 7, 8]);
        var notValidTree = new _1.default([1, null, 2, null, null, 3, 4]);
        var emptyTree = new _1.default([]);
        expect(emptyTree.isComplete()).toBeTruthy();
        expect(validTree.isComplete()).toBeTruthy();
        expect(notValidTree.isComplete()).toBeFalsy();
    });
    it('should test if a tree is balance', function () {
        var validTree = new _1.default([1, 2, 3, 4, 5, 6, 7]);
        var notValidTree = new _1.default([1, 2, 3, 4, 5, null, null, 8]);
        var emptyTree = new _1.default([]);
        expect(emptyTree.isBalance()).toBeTruthy();
        expect(validTree.isBalance()).toBeTruthy();
        expect(notValidTree.isBalance()).toBeFalsy();
    });
    it('should check if trees are symmetric', function () {
        var tree1 = new _1.default([1, 2, 2, 3, 4, 4, 3]);
        var tree2 = new _1.default([1, 2, 2, 3, 4, 3, 4]);
        var tree3 = new _1.default([1, 2, 2, 4, 3, 4, 3]);
        var tree4 = new _1.default([1, 2, 2]);
        expect(_1.default.isSymmetric(tree1, tree1)).toBeTruthy();
        expect(_1.default.isSymmetric(tree2, tree3)).toBeTruthy();
        expect(_1.default.isSymmetric(tree1, tree4)).toBeFalsy();
    });
    it('should check if trees are subtree', function () {
        var tree1 = new _1.default([1, 2, 2, 3, 4, 4, 3]);
        var tree2 = new _1.default([2, 4, 3]);
        var tree3 = new _1.default([3, 4, 5, 1, 2, null, null, null, null, 0]);
        var tree4 = new _1.default([4, 1, 2]);
        expect(_1.default.isSubtree(tree1, tree1)).toBeTruthy();
        expect(_1.default.isSubtree(tree1, tree2)).toBeTruthy();
        expect(_1.default.isSymmetric(tree3, tree4)).toBeFalsy();
    });
});
