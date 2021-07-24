function knapSackHelper(target, weight, values, n, set = {}){
	let key = n+""+target
	if(key in set) return set[key]
	if(target < 0) return Number.MIN_SAFE_INTEGER;
	if(target==0 || n-1 < 0) return 0; 
	

	let include  = values[n-1] + knapSackHelper(target -weight[n-1], weight, values, n-1);
	let exclude = knapSackHelper(target, weight, values, n-1)
	set[key] =  Math.max(include, exclude);
	return set[key];
}
console.log(knapSack(4, [4,5,1],[1,2,3], 3));