class Graph{
	constructor(graph){
		this.data = new Map(graph);
	}

	dfsRecursive(start, visited = null){
		if(!visited) visited = new Set();

		visited.add(start);

		for(let node of this.data.get(start))
			if(!visited.has(node)) this.dfs2(node,visited);

		return [...visited];
	}

	dfs(start){

		let visited = [];
		let stack = [start];

		while(stack.length != 0){

			let node = stack.pop();

			if(visited.indexOf(node) != -1) continue;

			visited.push(node);

			for(let n of this.data.get(node)){
				if(visited.indexOf(n) == -1) stack.push(n);
			}

		}

		return visited;
	}

	bfs(start){

		let visited = [];
		let queue = [start];

		while(queue.length){

			let node = queue.shift();
			if(visited.indexOf(node) != -1) continue;

			visited.push(node);

			for(let n of this.data.get(node))
				if(visited.indexOf(n) == -1) queue.push(n);

		}

		return visited;

	}
}

module.exports = Graph
