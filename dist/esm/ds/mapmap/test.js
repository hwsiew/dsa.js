import { MapMap } from '.';
describe('Test case of MapMap', function () {
    it('should set and get single key', function () {
        var ds = new MapMap();
        var arr = [1, 2, 3];
        var obj = { name: 'dummy' };
        ds.set('a', 'this is a string key');
        ds.set(1, 'this is a number key');
        ds.set(arr, 'this is an array key');
        ds.set(obj, 'this is an object key');
        expect(ds.get('a')).toEqual('this is a string key');
        expect(ds.get(1)).toEqual('this is a number key');
        expect(ds.get(arr)).toEqual('this is an array key');
        expect(ds.get(obj)).toEqual('this is an object key');
        // check if key expansion work, 
        // meaning if a key 'a'(value is a string) is already exist,
        // and set the nested key of the key 'a' will expand/overwrite the 'a' key to a Map to accomodate nested key
        ds.set('a', 'b', 'c', 'this is a string key');
        expect(ds.get('a', 'b', 'c')).toEqual('this is a string key');
    });
    it('should set and get multiple key', function () {
        var _a;
        var ds = new MapMap();
        var arr = [1, 2, 3];
        var obj = { name: 'dummy' };
        // multilevel keys
        ds.set('b', arr, obj, 'this is a nested string key');
        expect(ds.has('b', arr, obj)).toBeTruthy();
        expect(ds.get('b', arr, obj)).toEqual('this is a nested string key');
        expect(ds.has('b', arr)).toBeTruthy();
        expect((_a = ds.get('b', arr)) === null || _a === void 0 ? void 0 : _a.get(obj)).toEqual('this is a nested string key');
        expect(ds.has('b', arr, 'e')).toBeFalsy();
        expect(ds.get('b', arr, 'e')).toBeUndefined();
    });
    it('should clear all', function () {
        var ds = new MapMap();
        var arr = [1, 2, 3];
        var obj = { name: 'dummy' };
        // multilevel keys
        ds.set('b', arr, obj, 'this is a nested string key');
        expect(ds.size).toBe(1);
        ds.clear();
        expect(ds.size).toBe(0);
    });
    it('should delete keys', function () {
        var ds = new MapMap();
        var arr = [1, 2, 3];
        var obj = { name: 'dummy' };
        ds.set('a', 'this is a string key');
        ds.set(1, 'this is a number key');
        expect(ds.size).toBe(2);
        ds.delete('a');
        expect(ds.size).toBe(1);
        ds.delete(1);
        expect(ds.size).toBe(0);
        ds.set('a', 1, arr, obj, 'this is a value');
        expect(ds.has('a')).toBeTruthy();
        expect(ds.has('a', 1)).toBeTruthy();
        expect(ds.has('a', 1, arr)).toBeTruthy();
        expect(ds.has('a', 1, arr, obj)).toBeTruthy();
        ds.delete('a', 1, arr);
        expect(ds.has('a', 1, arr, obj)).toBeFalsy();
        expect(ds.get('a', 1)).toBeInstanceOf(Map);
    });
});
