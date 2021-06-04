/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate2 = function(matrix) {

    let res = []
    for(let j = 0; j<matrix[0].length ;j++){
        
        let temp = []
        for(let i = matrix.length-1; i>=0;i--){
            temp.push(matrix[i][j]);
        }
        res.push(temp);
    }
    return res
};

var rotate = function(matrix) {

    let temp;

    let len = matrix.length-1
    for(var i =0 ;i<matrix.length/2;i++){
        temp = matrix[i];
        matrix[i] = matrix[len-i]
        matrix[len-i] = temp;
    }

    for(var i =0;i< matrix.length;i++){
        for(var j = i+1;j<matrix[i].length;j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix
}
    
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))