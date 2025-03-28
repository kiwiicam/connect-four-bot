import '../css/board.css';
import React, { useState, useEffect } from 'react';
import { allLegalMoves, Evaluation, checkWin, Test } from './Bot';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export var currentBoard =
    [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]];

function Board() {

    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(0)));
    const [player, setPlayer] = useState(true)
    var currentBoard2 =
        [[0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]];

    var count = 0;

    function updateBoard(location = [], player) {

        const newBoard = [...board];
        let row = location[0];
        let col = location[1];
        if (newBoard[row][col] === 0) {
            newBoard[row][col] = player ? 'x' : 'o';
            setBoard(newBoard);
        }
        else {
            console.log("illegal move");
        }
        console.log(board);

    }

    function player_move(location = []) {
        var moves = allLegalMoves(board);
        for (var move of moves) {
            //may cause issues if it runs twice - keep an eye on it
            move = move.split(',')
            var num = parseInt(move[0])
            var num2 = parseInt(move[1])
            if (num === location[0] && num2 === location[1]) {
                updateBoard(location, false)
                setPlayer(!player);
                return;
            }

        }

    }
    function errorBanner() {
        count++;
        if (count < 4) {
            toast.error('Wait your turn!', { position: 'top-left', autoClose: 3000 });
        }
        else{
            count = 0;
            toast.error('Stop spamming ya twat!', { position: 'top-left', autoClose: 3000 });
        }
    }

    function press() {
        Test(currentBoard);
    }

    return (
        <div>
            <ToastContainer />
            {player ? <div> Your Turn!</div> : <div>The bot is thinking...</div>
            }
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className="square"
                                onClick={player ? () => player_move([rowIndex, colIndex]) : () => errorBanner()}
                                style={{ backgroundColor: cell === 'x' ? "red" : cell === 'o' ? "yellow" : "white" }}
                            >
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Board;



