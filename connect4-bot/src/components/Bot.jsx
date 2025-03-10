//check for all legal moves first
//minimax algorith with Alpha-Beta Pruning ?


export function allLegalMoves(board) {
    
    console.log("function called")
    var movesArray = []
    for (var i = 0; i < board[0].length; i++) //for each column
    {
        for (var o = 0; o < board.length; o++) //for each row
        {
            if (board[o][i] === 'x') {
                if (o > 0) {
                    board[o - 1][i] = 'L'
                    var result = o - 1 + "," + i
                    movesArray.push(result)
                    break;
                }
                else {
                    console.log("column is full")
                    break;
                }

            }
            
            if (o === board.length-1) {
                if (board[o][i] === 0) {
                    board[o][i] = 'L';  
                    var result = o + "," + i
                    movesArray.push(result)
                    break;
                }
            }



        }
    }
    console.log(board);
    return movesArray;

}