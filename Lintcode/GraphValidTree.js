function validTree(n, nodes) {

	if (n == 0) return true;
	if(nodes.length !== n-1) return false;

	let map = {}

	for (let item of nodes) {
		let [key, value] = item;
		if(!map[key]) map[key] = []
		if(!map[value]) map[value] = []
		map[value].push(key);
		map[key].push(value);
	}

	let visited = new Set()

	function dfs(node){
		for(let nodes of map[node]){
			if(!visited.has(nodes)){
				visited.add(nodes);
				dfs(nodes)
			}
		}
	}
	visited.add(0);

	dfs(0)
	return visited.size == n;
}
console.log(validTree(5,[[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))