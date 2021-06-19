function leftmost(mat) {
	let len = mat.length - 1;
	let k = mat[0].length - 1;
	for (var i = len - 1; i <= 0; i--) {
		while (mat[i][k] == 1) {
			k--
		}
	}
	console.log(mat[0].length - k)
}
console.log(leftmost([[0, 0], [0, 1]]));

/*
0 0 0 0 1
0 1 1 1 1
0 0 0 0 1
0 0 1 1 1
*/
