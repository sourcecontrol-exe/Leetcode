function knapsack(target, weights, values, index = weights.length-1,set = {}){

	let key = target
	if(key in set) return set[key];
	if(target< 0){
		return Number.MIN_SAFE_INTEGER
	}
	if(target == 0 || index < 0){
		return 0;
	}
	let included = values[index] + knapsack(target - weights[index], weights , values, index-1, set);
	let excluded = knapsack(target, weights, values, index-1, set);
	
	set[key] =  Math.max(included, excluded);
	return set[key]
}
console.log(knapsack(15,[4, 2, 1, 10, 2],[]))