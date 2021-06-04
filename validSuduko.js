var isValidSudoku = function (board) {
    let setX = new Array(9)
    let setY = new Array(9)
    let SetBox = new Array(9)

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

            if (board[i][j] !== ".") {
                let boxNumber = Math.floor(i / 3)+""+ Math.floor(j/3);
                if (setX[i] == undefined) {
                    setX[i] = new Set();
                }
                if (setY[j] == undefined) {
                    setY[j] = new Set();
                }
                if (SetBox[boxNumber] == undefined) {
                    SetBox[boxNumber] = new Set();
                }
                if (!setX[i].has(board[i][j]) && !setY[j].has(board[i][j]) && !SetBox[boxNumber].has(board[i][j])) {
                    setY[j].add(board[i][j]);
                    setX[i].add(board[i][j]);
                    SetBox[boxNumber].add(board[i][j])
                }
                else{
                    
                    return false;
                }
            }
        }
    }
    return true

};
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))