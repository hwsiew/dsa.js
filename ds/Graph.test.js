const { it, expect } = require('@jest/globals');
const Graph = require('./Graph');

let g = new Graph([
	['0', new Set(['1', '2','3'])],
	['1', new Set(['0', '2'])],
	['2', new Set(['0','1','4'])],
	['3', new Set(['0'])],
	['4', new Set(['2'])]
]);

it('should travel through dfs', function(){
	expect(g.dfs('0')).toEqual(['0','3','2','4','1'])
});

it('should travel through bfs', function(){
	expect(g.bfs('0')).toEqual(['0','1','2','3','4']);
});

it('should travel through dfs recursively', function(){
	expect(g.dfsRecursive('0')).toEqual(['0','1','2','4','3'])
});