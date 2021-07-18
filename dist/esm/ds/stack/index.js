var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Stack = /** @class */ (function () {
    function Stack(arr) {
        if (arr === void 0) { arr = []; }
        if (!Array.isArray(arr))
            throw new Error('Argument is not an array.');
        this._ = __spreadArray([], arr);
    }
    Object.defineProperty(Stack.prototype, "size", {
        /**
         * Get the number of elements in stack
         *
         * @returns {number} number of elements in stack
         */
        get: function () {
            return this._.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the top element of stack
     *
     * @returns the top element of stack or `undefined` if stack is empty
     */
    Stack.prototype.pop = function () {
        return this.isEmpty() ? undefined : this._.pop();
    };
    /**
     * Push an element to stack
     *
     * @param {*} element
     */
    Stack.prototype.push = function (element) {
        this._.push(element);
    };
    /**
     * Peek the top element of a stack without removing it from stack
     *
     * @returns the last element of stack or `undefined` if stack is empty
     */
    Stack.prototype.peek = function () {
        var last = this.isEmpty() ? null : this.size - 1;
        if (last === null)
            return undefined;
        return this._[last];
    };
    /**
     * Check if stack is empty
     *
     * @returns {boolean} `true` if stack is empty else `false`;
     */
    Stack.prototype.isEmpty = function () {
        return this._.length === 0;
    };
    return Stack;
}());
export default Stack;
