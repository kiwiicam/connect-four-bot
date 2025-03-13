//check for all legal moves first
//minimax algorith with Alpha-Beta Pruning ?

//import { checkWin } from './Board';

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

            if (o === board.length - 1) {
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
const evaluationTable =
    [[3, 4, 5, 7, 5, 4, 3],
    [4, 6, 8, 10, 8, 6, 4],
    [5, 8, 11, 13, 11, 8, 5],
    [5, 8, 11, 13, 11, 8, 5],
    [4, 6, 8, 10, 8, 6, 4],
    [3, 4, 5, 7, 5, 4, 3]]

function evaluationTableSum(board) {
    var sum = 0;
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (board[i][o] === 'x') {
                sum += evaluationTable[i][o];
            }
            else if (board[i][o] === 'o') {
                sum -= evaluationTable[i][o];
            }
        }
    }
    return sum;
}

function evaluationInARow(board) {
    var sum = 0;
    var player;
    //start with horizontal checking for 3 in a row with a space
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (i > 2) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o]
                    if (board[i - 1][o] === player && board[i - 2][o] === player && board[i - 3][o] === 0) {
                        if (player === 'x') {
                            sum += 100
                        }
                        else {
                            sum -= 100
                        }
                    }
                }

            }
        }

    }
    //check for horizontal 3 in a row taking "gravity" into account
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            

        }
    }

    //check for diagonal 3 in a row, again taking "gravity" into account.
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {

        }
    }
    return sum;
}

export function Evaluation(board) {
    //init sum to 0 (even rating)
    var sum = 0;

    //check for 3 in a row for with spaces
    sum += evaluationInARow(board)
    //run the position through the evaluation table to see who has the best pieces in each position
    //sum += evaluationTable(board)


    return sum;
}





function minimax(board, depth, maximizingPlayer, alpha, beta) {
    // if (depth === 0 || checkWin(board)) {

    // }
    var legalmoves = allLegalMoves(board)

}

function maxValue(board) {

}
function minValue(board) {

}