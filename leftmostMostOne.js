function leftmost(mat) {
	let len = mat.length - 1;
	let k = mat[0].length - 1;

	for (var i = len; i >= 0; i--) {
		while (mat[i][k] == 1 && k >=0) {
			k--
		}
	}
	return mat[0].length-1-k > 0 ? mat[0].length-1-k : -1
}
console.log(leftmost([[0,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,1]]));

/*
0 0 0 0 1
0 1 1 1 1
0 0 0 0 1
0 0 1 1 1
*/
