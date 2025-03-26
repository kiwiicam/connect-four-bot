//check for all legal moves first
//minimax algorith with Alpha-Beta Pruning ?

// import {currentBoard} from './Board';
var count = 0;
export function allLegalMoves(board) {
    var movesArray = [];
    for (var i = 0; i < board[0].length; i++) { //each column
        for (var o = board.length - 1; o >= 0; o--) { // each row
            if (board[o][i] === 0) {
                movesArray.push(`${o},${i}`);
                break;
            }
        }
    }
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
                        return true;
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
                    if (board[i - 1][o] === player && board[i - 2][o] === player && board[i - 3][o] === player) {
                        if (player === 'x') {
                            sum += 1000
                        }
                        else {
                            sum -= 1000
                        }
                    }
                    // if (board[i - 1][o] === player && board[i - 2][o] === player && board[i - 3][o] === 0) {
                    //     if (player === 'x') {
                    //         sum += 100
                    //     }
                    //     else {
                    //         sum -= 100
                    //     }
                    // }
                }

            }
        }

    }

    //check for horizontal 3 in a row taking "gravity" into account
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (o < 4) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o];
                    if (i < 5) {
                        if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === player) {
                            if (player === 'x') {
                                sum += 1000
                            }
                            else {
                                sum -= 1000
                            }
                        }

                        // if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === 0 && board[i + 1][o + 3] !== 0) {
                        //     if (player === 'x') {
                        //         sum += 100
                        //     }
                        //     else {
                        //         sum -= 100
                        //     }
                        // }
                    }
                    else {
                        if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === player) {
                            if (player === 'x') {
                                sum += 1000
                            }
                            else {
                                sum -= 1000
                            }
                        }
                        // if (board[i][o + 1] === player && board[i][o + 2] === player && board[i][o + 3] === 0) {
                        //     if (player === 'x') {
                        //         sum += 100
                        //     }
                        //     else {
                        //         sum -= 100
                        //     }
                        // }
                    }

                }
            }
            else if (o > 2) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o];
                    if (i < 5) {
                        if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === player) {
                            if (player === 'x') {
                                sum += 1000
                            }
                            else {
                                sum -= 1000
                            }
                        }
                        // if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === 0 && board[i + 1][o - 3] !== 0) {
                        //     if (player === 'x') {
                        //         sum += 100
                        //     }
                        //     else {
                        //         sum -= 100
                        //     }
                        // }
                    }
                    else {
                        if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === player) {
                            if (player === 'x') {
                                sum += 1000
                                console.log("found correct four in a (horiz)")
                            }
                            else {
                                sum -= 1000
                            }
                        }
                        // if (board[i][o - 1] === player && board[i][o - 2] === player && board[i][o - 3] === 0) {
                        //     if (player === 'x') {
                        //         sum += 100
                        //     }
                        //     else {
                        //         sum -= 100
                        //     }
                        // }
                    }

                }

            }

        }
    }

    //check for diagonal 3 in a row, again taking "gravity" into account.
    //left to right diagonal checking
    for (var i = 0; i < board.length; i++) {
        for (var o = 0; o < board[0].length; o++) {
            if (i > 2 && o < 4) {
                if (board[i][o] === 'x' || board[i][o] === 'o') {
                    player = board[i][o]
                    if (board[i - 1][o + 1] === player && board[i - 2][o + 2] === player && board[i - 3][o + 3] === player) {
                        if (player === 'x') {
                            sum += 1000
                            console.log("found correct four in a row (diag)")

                        }
                        else {
                            sum -= 1000
                        }
                    }
                    //     if (board[i - 1][o + 1] === player && board[i - 2][o + 2] === player && board[i - 3][o + 3] === 0 && board[i - 2][o + 3] !== 0) {
                    //         if (player === 'x') {
                    //             sum += 100

                    //         }
                    //         else {
                    //             sum -= 100
                    //         }
                    //     }

                    // }
                }
                else if (o > 2 && i > 2) {
                    if (board[i][o] === 'x' || board[i][o] === 'o') {
                        player = board[i][o]
                        if (board[i - 1][o - 1] === player && board[i - 2][o - 2] === player && board[i - 3][o - 3] === player) {
                            if (player === 'x') {
                                sum += 1000
                                console.log("found correct four in a row (diag)")
                            }
                            else {
                                sum -= 1000
                            }
                        }
                        // if (board[i - 1][o - 1] === player && board[i - 2][o - 2] === player && board[i - 3][o - 3] === 0 && board[i - 2][o - 3] !== 0) {
                        //     if (player === 'x') {
                        //         sum += 100
                        //         console.log("found correct diagonal with a space")
                        //     }
                        //     else {
                        //         sum -= 100
                        //     }
                        // }

                    }

                }
            }
        }
    }
    return sum;
}

function updateBoard(board, location = [], player) {

    let row = parseInt(location[0]);
    let col = parseInt(location[1]);
    if (board[row][col] === 0) {
        board[row][col] = player;
        return board;
    }
    else {
        console.log("update board error");
        return;
    }

}

export function Evaluation(board) {
    //init sum to 0 (even rating)
    var sum = 0;

    //check for 3 in a row for with spaces
    sum += evaluationInARow(board)
    //run the position through the evaluation table to see who has the best pieces in each position
    sum += evaluationTableSum(board)

    return sum;
}

export function Test(board) {
    let bestMove = minimax(board, 10, true);
    console.log(`Best move for the bot: ${bestMove.move}`);
    console.log(count, "different positions have been checked")
}




function minimax(board, depth, maximizingPlayer) {
    count++;
    //base case due to recursive function
    if (depth === 0 || checkWin(board)) {
        return { score: Evaluation(board), move: null };
    }

    if (maximizingPlayer) {
        return maxValue(board, depth);
    } else {

        return minValue(board, depth);
    }
}

function maxValue(board, depth) {

    var legalmoves = allLegalMoves(board);

    var maxVal = -Infinity;
    var bestmove = null;

    for (var move of legalmoves) {
        var moveArr = move.split(',');
        var newBoard = JSON.parse(JSON.stringify(board));
        newBoard = updateBoard(newBoard, moveArr, 'x');
        var result = minimax(newBoard, depth - 1, false);

        if (result.score > maxVal) {
            maxVal = result.score;
            bestmove = move;
        }

    }

    return { score: maxVal, move: bestmove };
}

function minValue(board, depth) {
    var legalmoves = allLegalMoves(board);
    var minVal = Infinity;
    var bestmove = null;
    for (var move of legalmoves) {
        var moveArr = move.split(',');
        var newBoard = JSON.parse(JSON.stringify(board));
        newBoard = updateBoard(newBoard, moveArr, 'o');
        var result = minimax(newBoard, depth - 1, true);;

        if (result.score < minVal) {
            minVal = result.score;
            bestmove = move;
        }

    }

    return { score: minVal, move: bestmove };
}