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

export function checkWin(board) {
    var winnarray = []
    var prev;
    var count = 1;
    //vertical win
    for (var i = 0; i < board[0].length; i++) {
        for (var o = 0; o < board.length; o++) {
            var char = board[o][i]
            if (char === 'x') {
                if (char === prev) {
                    count++;
                    if (count === 4) {
                        console.log("WINNNER!")
                        return;
                    }
                }
            }
            else {
                count = 1;
            }
            prev = char;

        }
    }

    //horizontal win
    var prev;
    var count = 1;
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            var char = board[i][o]
            if (char === 'x') {
                if (char === prev) {
                    count++;
                    if (count === 4) {
                        console.log("WINNNER!");
                        return;
                    }
                }
            }
            else {
                count = 1;
            }
            prev = char;

        }
    }
    //TODO implement diagonal win detection
    var prev;
    var count = 1;
    var two;
    var three;
    var four;
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (board[i][o] === 'x' || board[i][o] === 'o') {
                //left to right check
                if (i <= 2 && o > 2) {
                    var prev = board[i][o];
                    var two = board[i + 1][o - 1];
                    var three = board[i + 2][o - 2];
                    var four = board[i + 3][o - 3];

                    console.log(prev, two, three, four);

                    if (prev === two && two === three && three === four) {
                        winnarray.push(board[i][o]);
                        winnarray.push(board[i + 1][o - 1]);
                        winnarray.push(board[i + 2][o - 2]);
                        winnarray.push(board[i + 3][o - 3]);
                        console.log("WIN BY BOTTOM-LEFT TO TOP-RIGHT DIAGONAL");
                        console.log(winnarray);
                        return;
                    }
                }
                //right to left check
                if (i < board.length - 3 && o < board[0].length - 3) {
                    prev = board[i][o];
                    two = board[i + 1][o + 1]
                    three = board[i + 2][o + 2]
                    four = board[i + 3][o + 3]
                    if (prev === two && two === three && three === four) {
                        winnarray.push(board[i][o])
                        winnarray.push(board[i + 1][o + 1])
                        winnarray.push(board[i + 2][o + 2])
                        winnarray.push(board[i + 3][o + 3])
                        console.log("WIN BY DIAGONAL bottm right to top left")
                        console.log(winnarray);
                        return
                    }
                }
            }
        }


    }
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
    console.log("func called")
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (o < 4) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o];
                    if (i < 5) {
                        if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === 0 && board[i + 1][o + 3] !== 0) {
                            if (player === 'x') {
                                sum += 100
                            }
                            else {
                                sum -= 100
                            }
                        }
                    }
                    else {
                        if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === 0) {
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
            else if (o > 2) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o];
                    if (i < 5) {
                        if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === 0 && board[i + 1][o - 3] !== 0) {
                            if (player === 'x') {
                                sum += 100
                            }
                            else {
                                sum -= 100
                            }
                        }
                    }
                    else {
                        if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === 0) {
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
    }

    //check for diagonal 3 in a row, again taking "gravity" into account.
    //left to right diagonal checking
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (i > 2 && o < 4)
            {

            }
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
    //sum += evaluationTableSum(board)


    return sum;
}





function minimax(board, depth, maximizingPlayer, alpha, beta) {
    if (depth === 0 || checkWin(board)) {

    }
    var legalmoves = allLegalMoves(board)

}

function maxValue(board) {

}
function minValue(board) {

}