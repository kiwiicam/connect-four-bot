import '../css/board.css';
import React, { useEffect } from 'react';
import { allLegalMoves, Evaluation, checkWin, Test } from './Bot';
export var currentBoard =
    [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]];


function Board() {


    var currentBoard2 =
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]];



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

    function press() {
        Test(currentBoard);
    }

    return (
        <>
            <button onClick={() => { press() }}></button>
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
        </>
    );
}
export default Board;



