var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import CircularQueue from "./circularQueue";
var Queue = /** @class */ (function () {
    function Queue(arr) {
        if (arr === void 0) { arr = []; }
        if (!Array.isArray(arr))
            throw new Error('Argument is not an array.');
        this._ = __spreadArray([], arr);
    }
    Object.defineProperty(Queue.prototype, "size", {
        /**
         * The size of the queue
         *
         * @returns {number}
         */
        get: function () {
            return this._.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check if queue is empty
     *
     * @returns {boolean}
     */
    Queue.prototype.isEmpty = function () {
        return this._.length === 0;
    };
    /**
     * Enqueue an element to queue
     *
     * @param {any} element
     */
    Queue.prototype.enqueue = function (element) {
        this._.push(element);
    };
    /**
     * Get the first element from the queue
     *
     * @returns the first element from the queue or `undefined` if queue is empty
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty())
            return undefined;
        return this._.shift();
    };
    /**
     * Peek the first element of queue without removing it
     *
     * @returns an element from the queue or `undefined` if queue is empty
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this._[0];
    };
    return Queue;
}());
export { Queue as default, CircularQueue };
