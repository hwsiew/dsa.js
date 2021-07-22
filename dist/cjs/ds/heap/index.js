"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ## Heap
 *
 * A Heap is a special Tree-based data structure in which the tree is a complete binary tree
 *
 * ### Examples
 * ```javascript
 * const { Heap } = require('dsajs');
 * // or
 * // import { Heap } from 'dsajs';
 * let maxHeap = new Heap((a,b) => b>a);
 * let minHeap = new Heap((a,b) => a>b);
 * ```
 */
var Heap = /** @class */ (function () {
    /**
     * @constructor
     * @param compareFn (a,b) => return true if b should be before a else false
     */
    function Heap(compareFn) {
        this._ = [];
        this.compareFn = compareFn;
    }
    Object.defineProperty(Heap.prototype, "size", {
        /**
         * The size of heap
         */
        get: function () {
            return this._.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heap.prototype, "top", {
        /**
         * The top element of heap
         */
        get: function () {
            if (this.isEmpty())
                return undefined;
            else
                return this._[0];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check if heap is empty
     * @returns {boolean}
     */
    Heap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    /**
     * Add an element to heap
     * @param data
     */
    Heap.prototype.add = function (data) {
        this._.push(data);
        this.heapify();
    };
    /**
     * Clear all element from heap
     */
    Heap.prototype.clear = function () {
        this._ = [];
    };
    /**
     * Remove the top of heap and return
     *
     * @returns the top element or undefined if heap is empty
     */
    Heap.prototype.popTop = function () {
        var _a;
        if (this.isEmpty())
            return undefined;
        else {
            _a = [this._[this._.length - 1], this._[0]], this._[0] = _a[0], this._[this._.length - 1] = _a[1];
            var top_1 = this._.pop();
            this.heapify();
            return top_1;
        }
    };
    /**
     * The process of building a heap tree
     * @returns
     */
    Heap.prototype.heapify = function () {
        var _a;
        if (this.isEmpty())
            return;
        var last = Math.floor(this.size / 2 - 1);
        while (last >= 0) {
            var target = last;
            var left = 2 * last + 1;
            var right = 2 * last + 2;
            if (left < this.size && this.compareFn(this._[target], this._[left]))
                target = left;
            if (right < this.size && this.compareFn(this._[target], this._[right]))
                target = right;
            if (last != target)
                _a = [this._[target], this._[last]], this._[last] = _a[0], this._[target] = _a[1];
            last--;
        }
    };
    Heap.prototype.toArray = function () {
        return this._;
    };
    return Heap;
}());
exports.default = Heap;
