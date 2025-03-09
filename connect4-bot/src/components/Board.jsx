import '../css/board.css';
import React, { useEffect } from 'react';
import { allLegalMoves } from './Bot';



function Board() {

    var currentBoard =
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]];

        var currentBoard2 =
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 'x'],
        [0, 0, 0, 0, 0, 0, 'x'],
        [0, 0, 0, 0, 0, 0, 'x'],
        ['x', 0, 'x', 0, 0, 0, 'x'],
        ['x', 0, 'x', 0, 0, 0, 'x']];




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

    useEffect(() => {
        var result = allLegalMoves(currentBoard2);
        console.log(result)
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
