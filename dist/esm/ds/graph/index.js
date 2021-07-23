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
    /**
     * @constructor
     */
    function Graph() {
        this._ = new Map();
    }
    /**
     * Add a vertex to the graph
     *
     * @param v vertex
     * @returns
     */
    Graph.prototype.addVertex = function (v) {
        if (this._.has(v))
            return; // do nothing is vertex exist
        var list = new LinkedList();
        this._.set(v, list);
    };
    /**
     * Get a vertex if available
     *
     * @param vertex
     * @returns undefined if not vertex found
     */
    Graph.prototype.getVertex = function (vertex) {
        if (!this._.has(vertex))
            return undefined;
        return this._.get(vertex);
    };
    /**
     * Delete a vertex if available
     *
     * @param {*} v
     * @returns {boolean} if vertex is deleted successfully
     */
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
    /**
     * Add an edge between from and to
     *
     * @param {*} from need to match the type of vertex added
     * @param {*} to need to match the type of vertex added
     */
    Graph.prototype.addEdge = function (from, to) {
        if (!this._.has(from) || !this._.has(to))
            throw new Error('Vertex is not found');
        var list = this._.get(from);
        list.append(to);
    };
    /**
     * Remove an edge between from and to
     *
     * @param {*} from need to match the type of vertex added
     * @param {*} to need to match the type of vertex added
     */
    Graph.prototype.removeEdge = function (from, to) {
        if (!this._.has(from) || !this._.has(to))
            throw new Error('Vertex is not found');
        var list = this._.get(from);
        list.delete(function (x) { return x === to; });
    };
    /**
     * Check if there exists a path between from and to
     *
     * @param {*} from
     * @param {*} to
     * @returns {boolean}
     */
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
