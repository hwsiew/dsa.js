import Graph from './index';

describe('Graph Test Cases', function(){

	it('should add vertices and edges', function(){
		let g = new Graph();

		let a = {name:'a'};
		let b = {name:'b'};
		let c = {name:'c'};
		let d = {name:'d'};

		g.addVertex(a);
		g.addVertex(b);
		g.addVertex(c);
		g.addVertex(d);

		g.addEdge(a,b);
		g.addEdge(a,c);
		g.addEdge(b,a);
		g.addEdge(b,d);
		g.addEdge(c,d);

		expect(g.getVertex(a)?.toArray()).toEqual([b,c]);
		expect(g.getVertex(b)?.toArray()).toEqual([a,d]);
		expect(g.getVertex(c)?.toArray()).toEqual([d]);
		expect(g.getVertex(d)?.toArray()).toEqual([]);

	});

	it('should delete vertices', function(){
		let g = new Graph();

		let a = {name:'a'};
		let b = {name:'b'};
		let c = {name:'c'};
		let d = {name:'d'};

		g.addVertex(a);
		g.addVertex(b);
		g.addVertex(c);
		g.addVertex(d);

		g.addEdge(a,b);
		g.addEdge(a,c);
		g.addEdge(b,a);
		g.addEdge(b,d);
		g.addEdge(c,d);

		g.deleteVertex(a);
		
		expect(g.getVertex(a)).toBeUndefined();
		expect(g.getVertex(b)?.toArray()).toEqual([d]);
		expect(g.getVertex(c)?.toArray()).toEqual([d]);
		expect(g.getVertex(d)?.toArray()).toEqual([]);

	});

	it('should delete edges', function(){
		let g = new Graph();

		let a = {name:'a'};
		let b = {name:'b'};
		let c = {name:'c'};
		let d = {name:'d'};

		g.addVertex(a);
		g.addVertex(b);
		g.addVertex(c);
		g.addVertex(d);

		g.addEdge(a,b);
		g.addEdge(a,c);
		g.addEdge(b,a);
		g.addEdge(b,d);
		g.addEdge(c,d);

		g.removeEdge(a,b);

		expect(g.getVertex(a)?.toArray()).toEqual([c]);
		expect(g.getVertex(b)?.toArray()).toEqual([a,d]);
		expect(g.getVertex(c)?.toArray()).toEqual([d]);
		expect(g.getVertex(d)?.toArray()).toEqual([]);

	});

	it('should check if a path exist', function(){
		let g = new Graph();

		let a = {name:'a'},
			b = {name:'b'},
			c = {name:'c'},
			d = {name:'d'};

		g.addVertex(a);
		g.addVertex(b);
		g.addVertex(c);
		g.addVertex(d);

		g.addEdge(a,b);
		g.addEdge(b,c);
		g.addEdge(a,d);
		
		expect(g.hasPath(a,c)).toBeTruthy();
		expect(g.hasPath(b,d)).toBeFalsy();
		g.addEdge(b,a);
		expect(g.hasPath(b,d)).toBeTruthy();
		
	})

})