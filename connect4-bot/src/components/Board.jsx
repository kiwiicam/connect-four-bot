import '../css/board.css';
import React, { useEffect } from 'react';
import { allLegalMoves, Evaluation } from './Bot';



function Board() {

    var currentBoard =
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 'o', 0, 0, 'x', 0, 0],
        [0, 'o', 0, 0, 'x', 0, 0],
        [0, 'o', 0, 0, 'x', 0, 0],
        ['x', 'o', 0, 0, 0, 0, 0],
        ['x', 0, 0, 0, 0, 0, 0]];

    var currentBoard2 =
        [[0, 0, 0, 0, 0, 0, 'x'],
        [0, 0, 0, 0, 0, 'x', 0],
        [0, 0, 0, 0, 'x', 0, 0],
        [0, 0, 0, 'x', 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]];

    function getBoard() {
        return currentBoard;
    }

    function updateBoard(location = [], player) {
        let row = location[0];
        let col = location[1];
        if (currentBoard[row][col] === 0) {
            currentBoard[row][col] = player ? 'x' : 'o';
        }
        else {
            console.log("illegal move");
        }
        console.log(currentBoard);

    }
    function checkWin(board) {
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

    useEffect(() => {
        console.log(Evaluation(currentBoard));
    }, []);

    return (
        <div className="board">
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>

            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>
            <div className='col'>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
                <div className='square'> </div>
            </div>

        </div>
    );
}
export default Board;


