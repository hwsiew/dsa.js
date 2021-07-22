"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ## Circular Queue
 *
 * A circular shape of queue which follows first in first out.
 *
 * ### Examples
 * ```javascript
 * const { CircularQueue } = require('dsajs');
 * // or
 * // import { CircularQueue } from 'dsajs';
 *
 * let ds = new CircularQueue();
 * ```
 */
var CircularQueue = /** @class */ (function () {
    /**
     * @constructor
     * @param size the number elements allows for circular queue
     */
    function CircularQueue(size) {
        this._ = new Array(size);
        this._first = -1;
        this._last = -1;
        this._size = size;
    }
    Object.defineProperty(CircularQueue.prototype, "size", {
        /**
         * The size of circular queue
         */
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check if queue is empty
     *
     * @returns {boolean}
     */
    CircularQueue.prototype.isEmpty = function () {
        return this._first == -1 && this._last == -1;
    };
    /**
     * Check if queue is full
     *
     * @returns {boolean}
     */
    CircularQueue.prototype.isFull = function () {
        return (this._last + 1) % this._size == this._first;
    };
    /**
     * Enqueue an element to queue
     *
     * @param {*} element
     */
    CircularQueue.prototype.enqueue = function (element) {
        if (this.isEmpty()) {
            this._[0] = element;
            this._first = 0;
            this._last = 0;
        }
        else if (this.isFull()) {
            throw new Error('Queue is full');
        }
        else {
            this._last = (this._last + 1) % this._size;
            this._[this._last] = element;
        }
    };
    /**
     * Remove the first element from queue if one exists
     *
     * @returns {*} an element of queue or undefined if queue is empty
     */
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty())
            return undefined;
        var first = this._first;
        if (this._first == this._last) {
            this._first = -1;
            this._last = -1;
        }
        else {
            this._first = (this._first + 1) % this._size;
        }
        return this._[first];
    };
    /**
     * Peek the first element of queue without removing it from queue
     *
     * @returns {*} an element of queue or undefined if queue is empty
     */
    CircularQueue.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this._[this._first];
    };
    return CircularQueue;
}());
exports.default = CircularQueue;
