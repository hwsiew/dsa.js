import BinaryNode from "./binaryNode";
var BinaryTree = /** @class */ (function () {
    /**
     * @constructor
     * @param {Array<*>} arr
     */
    function BinaryTree(arr) {
        if (arr === void 0) { arr = []; }
        if (!arr || !Array.isArray(arr))
            throw new Error('No array to initialize tree');
        var build = function (i) {
            if (i >= arr.length || arr[i] === null)
                return null;
            var node = new BinaryNode(arr[i]);
            node.left = build(2 * i + 1);
            node.right = build(2 * i + 2);
            return node;
        };
        this._root = build(0);
    }
    Object.defineProperty(BinaryTree.prototype, "root", {
        /**
         * The root of the tree
         */
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculate the height from a node (or root) to leaf
     *
     * @param {?BinaryNode}
     * @returns {number}
     */
    BinaryTree.prototype.height = function (node) {
        if (node === void 0) { node = null; }
        var curr = node ? node : this._root;
        var calc = function (node) {
            if (!node)
                return 0;
            return 1 + Math.max(calc(node.left), calc(node.right));
        };
        return calc(curr);
    };
    /**
     * Get the number of nodes of a tree
     *
     * @returns {number}
     */
    BinaryTree.prototype.size = function () {
        var helper = function (node) {
            if (!node)
                return 0;
            return 1 + helper(node.left) + helper(node.right);
        };
        return helper(this._root);
    };
    /**
     * Check if tree is empty
     *
     * @returns {boolean}
     */
    BinaryTree.prototype.isEmpty = function () {
        return this._root === null;
    };
    /**
     * Traverse tree in-order
     *
     * @returns {BinaryNode[]} an array of each element in sequence
     */
    BinaryTree.prototype.inOrder = function () {
        var arr = [];
        var helper = function (node) {
            if (!node)
                return null;
            helper(node.left);
            arr.push(node.data);
            helper(node.right);
        };
        helper(this._root);
        return arr;
    };
    /**
     * Traverse tree pre-order
     *
     * @returns {BinaryNode[]} an array of each element in sequence
     */
    BinaryTree.prototype.preOrder = function () {
        var arr = [];
        var helper = function (node) {
            if (!node)
                return null;
            arr.push(node.data);
            helper(node.left);
            helper(node.right);
        };
        helper(this._root);
        return arr;
    };
    /**
     * Traverse tree post-order
     *
     * @returns {BinaryNode[]} an array of each element in sequence
     */
    BinaryTree.prototype.postOrder = function () {
        var arr = [];
        var helper = function (node) {
            if (!node)
                return null;
            helper(node.left);
            helper(node.right);
            arr.push(node.data);
        };
        helper(this._root);
        return arr;
    };
    /**
     * Check if tress is full
     *
     * @returns {boolean}
     */
    BinaryTree.prototype.isFull = function () {
        var verify = function (node) {
            if (!node)
                return true;
            // if a node has both left and right node
            if (node.left && node.right)
                return true;
            // if a node has either left or right node
            if (node.left || node.right)
                return false;
            return verify(node.left) && verify(node.right);
        };
        return verify(this._root);
    };
    /**
     * Check if a tree is perfect
     *
     * @returns {boolean}
     */
    BinaryTree.prototype.isPerfect = function () {
        var depth = 0;
        var curr = this._root;
        // calculate the left most depth
        while (curr) {
            depth++;
            curr = curr.left;
        }
        var verify = function (node, level, maxDepth) {
            if (!node)
                return true;
            if (!node.left && !node.right)
                return level + 1 === maxDepth;
            if (node.left && node.right)
                return verify(node.left, level + 1, maxDepth) && verify(node.right, level + 1, maxDepth);
            return false;
        };
        return verify(this._root, 0, depth);
    };
    /**
     * Check if a tree is balanced
     *
     * @returns {boolean}
     */
    BinaryTree.prototype.isBalance = function () {
        var _this = this;
        var verify = function (node) {
            if (!node)
                return true;
            var lheight = _this.height(node.left);
            var rheight = _this.height(node.right);
            if (Math.abs(lheight - rheight) > 1)
                return false;
            return verify(node.left) && verify(node.right);
        };
        return verify(this._root);
    };
    /**
     * Check if a tree is complete
     *
     * @returns {boolean}
     */
    BinaryTree.prototype.isComplete = function () {
        var _this = this;
        var verify = function (node, index) {
            if (index === void 0) { index = 0; }
            if (!node)
                return true;
            if (index >= _this.size())
                return false;
            return verify(node.left, 2 * index + 1) && verify(node.right, 2 * index + 2);
        };
        return verify(this._root);
    };
    /**
     * Check if tree1 is symmetric to tree2
     *
     * @param {BinaryTree} tree1
     * @param {BinaryNode} tree2
     * @returns {boolean}
     */
    BinaryTree.isSymmetric = function (tree1, tree2) {
        var verify = function (root1, root2) {
            if (!root1 && !root2)
                return true;
            if (root1 && root2)
                if (root1.data === root2.data) {
                    return verify(root1.left, root2.right) && verify(root1.right, root2.left);
                }
            return false;
        };
        return verify(tree1.root, tree2.root);
    };
    /**
     * Check if tree2 is a subtree of tree1
     *
     * @param {BinaryTree} tree1
     * @param {BinaryTree} tree2
     * @returns {boolean}
     */
    BinaryTree.isSubtree = function (tree1, tree2) {
        var verify = function (root1, root2) {
            if (!root1 && !root2)
                return true;
            if (root1 && root2) {
                if (root1.data !== root2.data)
                    return verify(root1.left, root2) || verify(root1.right, root2);
                else
                    return verify(root1.left, root2.left) && verify(root1.right, root2.right);
            }
            return false;
        };
        return verify(tree1.root, tree2.root);
    };
    return BinaryTree;
}());
export default BinaryTree;
