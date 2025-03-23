import '../css/board.css';
import React, { useEffect } from 'react';
import { allLegalMoves, Evaluation, checkWin } from './Bot';



function Board() {

    var currentBoard =
        [['x', 'x', 'x', 'x', 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        ['x', 0, 'o', 'o', 'o', 'o', 0],
        ['x', 0, 'x', 'x', 'o', 0, 0],
        ['x', 0, 'o', 'o', 'x', 0, 0],
        ['x', 0, 'o', 0, 0, 'x', 0]];


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

export function getBoard() {
    return 5;
}


