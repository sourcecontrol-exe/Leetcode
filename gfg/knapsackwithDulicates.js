function knapsackWithDuplicats(target, values,weight){
	let dp = new Array(target+1).fill(0)

	for(let i = 0;i<weight.length;i++){
		for(let j = weight[i];j< dp.length;j++){
			dp[j] = Math.max(dp[j], dp[j- weight[i]]+values[i])
		}
	}
	return dp[target];
}
knapsackWithDuplicats(8,[1,4,5,7],[1,3,4,5])