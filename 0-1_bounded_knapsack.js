function knapsack(target, weights, values, index = weights.length-1){
	
	if(target< 0){
		return Number.MIN_SAFE_INTEGER
	}
	if(target == 0 || index < 0){
		return 0;
	}
	let included = values[index] + knapsack(target - weights[index], weights , values, index-1);
	let excluded = knapsack(target, weights, values, index-1);
	
	return Math.max(included, excluded);
}
console.log(knapSack(15,[4, 2, 1, 10, 2],[12, 2, 1, 4, 1]))