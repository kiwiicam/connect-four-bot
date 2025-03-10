import '../css/board.css';
import React, { useEffect } from 'react';
import { allLegalMoves } from './Bot';



function Board() {

    var currentBoard =
        [[0, 0, 0, 0, 0, 'x', 0],
        [0, 0, 0, 0, 0, 'x', 0],
        [0, 0, 0, 0, 0, 'x', 0],
        ['x', 'x', 'x', 'x', 0, 'x', 0],
        [0, 0, 0, 0, 0, 0, 0],
        ['x', 'x', 'x', 'x', 0, 0, 0]];

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
                            console.log("WINNNER!")
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


    }

    useEffect(() => {
        checkWin(currentBoard);
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
