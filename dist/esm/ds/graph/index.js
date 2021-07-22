import { LinkedList } from "../..";
/**
 * ## Graph
 *
 * ## Examples
 * ```javascript
 * const { Graph } = require('dsajs');
 * // or
 * import { Graph } from 'dsajs';
 *
 * let ds = new Graph();
 * ```
 */
var Graph = /** @class */ (function () {
    function Graph() {
        this._ = new Map();
    }
    Graph.prototype.addVertex = function (v) {
        if (this._.has(v))
            return; // do nothing is vertex exist
        var list = new LinkedList();
        this._.set(v, list);
    };
    Graph.prototype.getVertex = function (vertex) {
        if (!this._.has(vertex))
            return undefined;
        return this._.get(vertex);
    };
    Graph.prototype.deleteVertex = function (v) {
        if (!this._.has(v))
            return false;
        this._.delete(v);
        this._.forEach(function (list, key) {
            var compareFn = function (x) { return x === v; };
            list.delete(compareFn);
        });
        return true;
    };
    Graph.prototype.addEdge = function (from, to) {
        if (!this._.has(from) || !this._.has(to))
            throw new Error('Vertex is not found');
        var list = this._.get(from);
        list.append(to);
    };
    Graph.prototype.removeEdge = function (from, to) {
        if (!this._.has(from) || !this._.has(to))
            throw new Error('Vertex is not found');
        var list = this._.get(from);
        list.delete(function (x) { return x === to; });
    };
    Graph.prototype.hasPath = function (from, to) {
        if (!this._.has(from) || !this._.has(to))
            return false;
        var stack = this._.get(from).toArray();
        var visited = new Set([from]);
        while (stack.length) {
            var node = stack.shift();
            if (visited.has(node))
                continue;
            if (node === to)
                return true;
            visited.add(node);
            stack = stack.concat(this._.get(node).toArray());
        }
        return false;
    };
    return Graph;
}());
export default Graph;
