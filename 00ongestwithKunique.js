function unique(s, k) {
	let temp = 0;
	let max = '';
	for(let i =0;i<s.length;i++){
		let currmax = s.slice(i,i+k);
		while(new Set(currmax).size < k && i<s.length){
			i++;
			currmax= s.slice()
		}
	}
}