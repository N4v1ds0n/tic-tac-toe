// Wait until the HTML document is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    const multiPlayerButton = document.getElementById('multi-player');

    // Start the game when the multiplayer button is clicked
    multiPlayerButton.addEventListener('click', startGame);
});

/**
 * Function to start a new Tic Tac Toe game
 * - Initializes an empty 3x3 board
 * - Sets the starting player to 'X'
 * - Calls renderBoard to display the board
 */

function startGame() {
    // Hide the mode selection buttons and description
    document.querySelector('.mode-selection').style.display = 'none';

    // Show and animate the game board andscoreboard
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.style.display = 'flex'; // Show the scoreboard
    scoreboard.classList.add('fade-in'); // Trigger fade-in animation
    const gameBoard = document.getElementById('game-board');
    gameBoard.style.display = 'flex';
    gameBoard.classList.add('fade-in'); // Trigger fade-in animation

    // Initialize the board and current player
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let currentPlayer = 'X';

    renderBoard(board, currentPlayer);
}


/**
 * Function to render the 3x3 game board on the page
 * creates .card elements for each cell
 * Adds a click event to each card
 */
function renderBoard(board, currentPlayer) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear any existing content in the game board

    // Loop through the board array (3x3)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.row = i;
            card.dataset.col = j;

            const p = document.createElement('p');
            p.innerText = board[i][j];
            card.appendChild(p);

            // Optional: Add click handler here if needed
            card.addEventListener('click', function () {
                playerMove(card, board, currentPlayer);
            });

            gameBoard.appendChild(card);
        }
    }
    
    // Make the board visible and apply fade-in animation if needed
    gameBoard.style.display = 'grid';
    gameBoard.classList.add('fade-in');
}


/**
 * Handles a players move when a cell/card is clicked
 * - Checks if the cell is already filled
 * - Updates the board and UI
 * - Checks for win or draw
 * - Switches the player if game continues
 
 */
function playerMove(card, board, currentPlayer) {
    const row = card.dataset.row;
    const col = card.dataset.col;

    // Prevent overwriting a move
    if (board[row][col] !== '') {
        alert('Cell already occupied!');
        return;
    }

    // Apply move to the board and UI
    board[row][col] = currentPlayer;
    card.querySelector('p').innerText = currentPlayer;

    // Check for a win
    if (checkWin(board, currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        startGame(); // Restart the game
    }
    // Check for a draw
    else if (checkDraw(board)) {
        alert(`It's a draw!`);
        startGame(); // Restart the game
    }
    // Switch to the other player
    else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard(board, currentPlayer); // Re-render with updated state
    }
}


/**
 * Check if the current player has won the game after a move
 * - Evaluate rows, columns, and diagonals
 */
function checkWin(board, player) {
    for (let i = 0; i < 3; i++) {
        // Check rows and columns
        if (
            (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    ) {
        return true;
    }

    return false;
}


/**
 * Check if the game is a draw
 * - Returns true if all cells are filled and no winner
 */
function checkDraw(board) {
    for (let row of board) {
        if (row.includes('') || row.includes(null)) {
            return false;
        }
    }
    return true;
}

/**
 * function to increase score of winning player
 * - Updates the score display
 */
function updateScore(player) {
    const scoreDisplay = document.getElementById(`${player}-score`);
    let score = parseInt(scoreDisplay.innerText) || 0;
    score += 1;
    scoreDisplay.innerText = score;
}
