"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTree_1 = __importDefault(require("./BinaryTree"));
var binaryNode_1 = __importDefault(require("./binaryNode"));
/**
 * Binary Search Tree
 *
 * ### Example
 * ```javascript
 * const BinarySearchTree = require('dsajs');
 *
 * let bst = new BinarySearchTree();
 * bst.insert(1);
 * bst.insert(2);
 * ...
 * ```
 */
var BinarySearchTree = /** @class */ (function (_super) {
    __extends(BinarySearchTree, _super);
    /**
     * @constructor
     * @param {CompareFunction} compareFn
     */
    function BinarySearchTree(compareFn) {
        var _this = _super.call(this) || this;
        _this._compareFn = compareFn ? compareFn : function (a, b) {
            if (a < b)
                return 1;
            else if (a > b)
                return -1;
            else
                return 0;
        };
        return _this;
    }
    /**
     * Insert data into binary search tree
     *
     * @param {*} data
     */
    BinarySearchTree.prototype.insert = function (data) {
        var helper = function (node, compare) {
            if (!node) {
                node = new binaryNode_1.default(data);
            }
            else if (compare(node.data, data) > 0) {
                node.right = helper(node.right, compare);
            }
            else {
                node.left = helper(node.left, compare);
            }
            return node;
        };
        this._root = helper(this._root, this._compareFn);
    };
    /**
     * Search a value(data) in binary search tree
     *
     * @param {*} data
     * @returns {BinaryNode|null} null if not found in binary tree
     */
    BinarySearchTree.prototype.search = function (data) {
        var compare = this._compareFn;
        var find = function (node) {
            if (!node)
                return null;
            if (compare(node.data, data) > 0)
                return find(node.right);
            else if (compare(node.data, data) < 0)
                return find(node.left);
            else
                return node;
        };
        return find(this._root);
    };
    /**
     * Delete data from tree
     *
     * @param {*} data
     */
    BinarySearchTree.prototype.delete = function (data) {
        var compare = this._compareFn;
        var helper = function (node, _data) {
            if (_data === void 0) { _data = data; }
            if (!node)
                return node;
            if (compare(node.data, _data) > 0) {
                node.right = helper(node.right, _data);
            }
            else if (compare(node.data, _data) < 0) {
                node.left = helper(node.left, _data);
            }
            else {
                // node is the target
                if (node.left && !node.right) {
                    var temp = node.left;
                    node = null;
                    return temp;
                }
                else if (node.right && !node.left) {
                    var temp = node.right;
                    node = null;
                    return temp;
                }
                if (!node.left && !node.right)
                    return null;
                // node has both left and right or node
                var curr = node.right;
                while (curr && curr.left) {
                    curr = curr.left;
                }
                node.data = curr === null || curr === void 0 ? void 0 : curr.data;
                node.right = helper(node.right, curr === null || curr === void 0 ? void 0 : curr.data);
            }
            return node;
        };
        this._root = helper(this.root);
    };
    return BinarySearchTree;
}(BinaryTree_1.default));
exports.default = BinarySearchTree;
