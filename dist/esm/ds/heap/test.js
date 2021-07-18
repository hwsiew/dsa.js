import Heap from ".";
describe('Heap Test Cases', function () {
    it('should add to max heap', function () {
        var h = new Heap(function (a, b) { return b > a; });
        expect(h.toArray()).toEqual([]);
        h.add(2);
        expect(h.toArray()).toEqual([2]);
        h.add(4);
        expect(h.toArray()).toEqual([4, 2]);
        h.add(1);
        expect(h.toArray()).toEqual([4, 2, 1]);
        h.add(3);
        expect(h.toArray()).toEqual([4, 3, 1, 2]);
    });
    it('should add to min heap', function () {
        var h = new Heap(function (a, b) { return a > b; });
        expect(h.toArray()).toEqual([]);
        h.add(2);
        expect(h.toArray()).toEqual([2]);
        h.add(4);
        expect(h.toArray()).toEqual([2, 4]);
        h.add(1);
        expect(h.toArray()).toEqual([1, 4, 2]);
        h.add(3);
        expect(h.toArray()).toEqual([1, 3, 2, 4]);
    });
    it('should tell size of heap', function () {
        var h = new Heap(function (a, b) { return a > b; });
        expect(h.size).toBe(0);
        h.add(2);
        expect(h.size).toBe(1);
        h.add(4);
        h.add(1);
        expect(h.size).toBe(3);
        h.add(3);
        expect(h.size).toBe(4);
        h.clear();
        expect(h.size).toBe(0);
    });
    it('should remove the top of heap', function () {
        var h = new Heap(function (a, b) { return b > a; });
        h.add(3);
        expect(h.top).toEqual(3);
        h.add(4);
        expect(h.top).toEqual(4);
        h.add(1);
        expect(h.top).toEqual(4);
        h.add(2);
        expect(h.popTop()).toEqual(4);
        expect(h.top).toEqual(3);
        expect(h.toArray()).toEqual([3, 2, 1]);
    });
});
