/**
 * # MapMap
 *
 * Nested version of Map with same API as Map to set and get element with nested keys.
 *
 * ## Example
 * ```javascript
 * const { MapMap } = require('dsajs');
 * // or
 * // import { MapMap } from 'dsajs';
 *
 * let ds = new MapMap();
 * let arr = [];
 * let obj = {};
 * // set a nested key to value
 * ds.set('a', 1, arr, obj, 'value of any');
 * // get a nested key
 * ds.get('a', 1, arr, obj); // return 'value of any'
 * // check if a nested key exist
 * ds.has('a', 1, arr, obj); // true
 * ```
 */
var MapMap = /** @class */ (function () {
    /**
     * @constructor
     */
    function MapMap() {
        this._ = new Map();
    }
    Object.defineProperty(MapMap.prototype, "size", {
        /**
         * Get the top level map size
         *
         * @returns {number}
         */
        get: function () {
            return this._.size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check if a keys exist
     *
     * @param {Array<any>} keys
     * @returns {boolean}
     */
    MapMap.prototype.has = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var curr = this._;
        var i = 0;
        var n = keys.length;
        while (i < n) {
            if (!(curr instanceof Map))
                return false;
            var key = keys[i];
            if (!curr.has(key))
                return false;
            curr = curr.get(key);
            i++;
        }
        return true;
    };
    /**
     * Get the value of keys
     *
     * @param {Array<any>} keys
     * @returns {undefined|any} the value of the keys if exists or undefined
     */
    MapMap.prototype.get = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        if (!this.has.apply(this, keys))
            return undefined;
        var curr = this._;
        var i = 0;
        var n = keys.length;
        while (i < n) {
            curr = curr.get(keys[i++]);
        }
        return i < n ? undefined : curr;
    };
    /**
     * Set a value for keys
     *
     * @param args argument(s) and the last argument is the value to set
     * @returns {boolean} if set success
     */
    MapMap.prototype.set = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var value = args.pop();
        var keys = args;
        var i = 0, n = keys.length;
        var curr = this._;
        while (i < n) {
            var key = keys[i++];
            if (i < n) { // key is not the last key
                if (curr.has(key)) {
                    var temp = curr.get(key);
                    if (temp instanceof Map)
                        curr = temp;
                    else { // expansion value to Map
                        var _map = new Map();
                        curr.set(key, _map);
                        curr = _map;
                    }
                }
                else {
                    var _map = new Map();
                    curr.set(key, _map);
                    curr = _map;
                }
            }
            else { // key is the last key, then assign value
                curr.set(key, value);
            }
        }
        return true;
    };
    /**
     * Delete value of keys
     *
     * @param keys
     * @returns {boolean} if delete success
     */
    MapMap.prototype.delete = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        if (!this.has.apply(this, keys))
            return false;
        var n = keys.length;
        var i = 0;
        var curr = this._;
        while (i < n) {
            var key = keys[i++];
            if (i < n)
                curr = curr.get(key);
            else
                curr.delete(key);
        }
        return true;
    };
    /**
     * Remove all entries in mapmap
     */
    MapMap.prototype.clear = function () {
        this._ = new Map();
    };
    return MapMap;
}());
export default MapMap;
