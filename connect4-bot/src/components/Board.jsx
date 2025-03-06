import '../css/board.css';

var currentBoard = 
[[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
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

function Board() {
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
