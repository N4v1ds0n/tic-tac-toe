let singlePlayer = false; // Track selected game mode
let aiDifficulty = 'easy'; // Default AI difficulty


// Wait until the HTML document is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    const multiPlayerButton = document.getElementById('multi-player');
    const singlePlayerButton = document.getElementById('single-player');

    // Start the game when the multiplayer button is clicked
    multiPlayerButton.addEventListener('click', function () {
        singlePlayer = false;
        startGame();
    });

    singlePlayerButton.addEventListener('click', function () {
        singlePlayer = true;
        document.querySelector('.mode-selection').style.display = 'none';
        document.getElementById('difficulty-selection').style.display = 'block';
    });

    // Difficulty selection
    document.getElementById('easy-mode').addEventListener('click', function () {
        aiDifficulty = 'easy';
        document.getElementById('difficulty-selection').style.display = 'none';
        startGame();
    });

    document.getElementById('medium-mode').addEventListener('click', function () {
        aiDifficulty = 'medium';
        document.getElementById('difficulty-selection').style.display = 'none';
        startGame();
    });

    document.getElementById('hard-mode').addEventListener('click', function () {
        aiDifficulty = 'hard';
        document.getElementById('difficulty-selection').style.display = 'none';
        startGame();
    });
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
    document.querySelector('.welcome').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'none';

    // Show and animate the game board andscoreboard
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.style.display = 'flex'; // Show the scoreboard
    scoreboard.classList.add('fade-in'); // Trigger fade-in animation
    document.getElementById('back-to-mode').style.display = 'inline-block'; // Show the back button

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
function renderBoard(board, currentPlayer, winningCells = []) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear any existing content in the game board

    // Loop through the board array (3x3)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.row = i;
            card.dataset.col = j;

            // Add winning class if this cell is part of the winning row/column/diagonal
            if (winningCells.some(cell => cell.row === i && cell.col === j)) {
                card.classList.add('winning-cell');
            }

            const p = document.createElement('p');
            p.innerText = board[i][j];
            card.appendChild(p);

            // Add click handler for the card
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
    const winningCells = checkWin(board, currentPlayer);
    if (winningCells) {
        renderBoard(board, currentPlayer, winningCells); // Highlight the winning cells
        setTimeout(() => {
            showCustomAlert(`${currentPlayer} wins!`, () => {
                updateScore(currentPlayer === 'X' ? 'player1' : 'player2');
                startGame();
            });
        }, 300); // Delay allows DOM to render
    }
    // Check for a draw
    else if (checkDraw(board)) {
        showCustomAlert(`It's a draw!`, () => {
            startGame();
        });
    }
    // Switch to the other player
    else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (singlePlayer && currentPlayer === 'O') {
            setTimeout(() => {
                if (aiDifficulty === 'easy') {
                    randomAIMove(board, currentPlayer);
                } else if (aiDifficulty === 'hard') {
                    smartAIMove(board, currentPlayer);
                } else if (aiDifficulty === 'medium') {
                    if (Math.random() < 0.5) {             // 50% chance to make a mistake and move completely random
                        randomAIMove(board, currentPlayer);
                    } else {
                        smartAIMove(board, currentPlayer);
                    }
                } 
            }, 500);
        } else {
            renderBoard(board, currentPlayer);
        }
    }
}

/**
 * Function to make a random move for the AI player
 * - Selects a random empty cell on the board
 */
function randomAIMove(board, player) {
    const emptyCells = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                emptyCells.push({ row: i, col: j });
            }
        }
    }

    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const { row, col } = emptyCells[randomIndex];

    board[row][col] = player;

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.dataset.row == row && card.dataset.col == col) {
            card.querySelector('p').innerText = player;
        }
    });

    const winningCells = checkWin(board, player);
    if (winningCells) {
        renderBoard(board, player, winningCells);

        setTimeout(() => {
            showCustomAlert(`${currentPlayer} wins!`, () => {
                updateScore(currentPlayer === 'X' ? 'player1' : 'player2');
                startGame();
            });
        }, 300);
    } else if (checkDraw(board)) {
        showCustomAlert(`It's a draw!`, () => {
            startGame();
        });
    } else {
        renderBoard(board, 'X'); // Back to human
    }
}

/**
 * Function to make a smart move for the AI player using Minimax algorithm
 * - Evaluates the board and selects the best move
 * - Updates the board and UI
 */
function smartAIMove(board, player) {
    const bestMove = minimax(board, player).move;
    board[bestMove.row][bestMove.col] = player;

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.dataset.row == bestMove.row && card.dataset.col == bestMove.col) {
            card.querySelector('p').innerText = player;
        }
    });

    const winningCells = checkWin(board, player);
    if (winningCells) {
        renderBoard(board, player, winningCells);
        setTimeout(() => {
            showCustomAlert(`${player} wins!`, () => {
                updateScore(player === 'X' ? 'player1' : 'player2');
                startGame();
            });
        }, 300);
    } else if (checkDraw(board)) {
        showCustomAlert(`It's a draw!`, () => {
            startGame();
        });
    } else {
        renderBoard(board, 'X'); // Back to human
    }
}

/**
 * Minimax algorithm to find the best move for the AI player 
 * - Recursively evaluates all possible moves
 * - Returns the best move and its score
 */
function minimax(board, player) {
    const opponent = player === 'X' ? 'O' : 'X';
    const winner = checkWin(board, 'X') ? 'X' : checkWin(board, 'O') ? 'O' : null;

    if (winner === player) return { score: 1 };
    if (winner === opponent) return { score: -1 };
    if (checkDraw(board)) return { score: 0 };

    let moves = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                board[i][j] = player;
                const result = minimax(board, opponent);
                moves.push({ row: i, col: j, score: -result.score });
                board[i][j] = '';
            }
        }
    }

    moves.sort((a, b) => b.score - a.score); // maximize
    return { move: moves[0], score: moves[0].score };
}

/**
 * Check if the current player has won the game after a move
 * - Evaluate rows, columns, and diagonals
 */
function checkWin(board, player) {
    for (let i = 0; i < 3; i++) {
        // Check rows and columns
        if ((board[i][0] === player && board[i][1] === player && board[i][2] === player)) {
            return [{ row: i, col: 0 }, { row: i, col: 1 }, { row: i, col: 2 }]; // Winning row
        }
        if ((board[0][i] === player && board[1][i] === player && board[2][i] === player) ) {
            return [{ row: 0, col: i }, { row: 1, col: i }, { row: 2, col: i }]; // Winning column
        }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }]; // Winning diagonal
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }]; // Winning diagonal
    }
    return null; // No winner
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
 * function to show a custom win or draw alert message
 */
function showCustomAlert(message, callback) {
    const alertBox = document.getElementById('game-alert');
    const alertMessage = document.getElementById('alert-message');
    const alertOk = document.getElementById('alert-ok');

    alertMessage.innerText = message;
    alertBox.classList.remove('hidden');

    alertOk.onclick = function () {
        alertBox.classList.add('hidden');
        if (callback) callback();
    };
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

/**
 * Button to reset the game and return to mode selection
 * - Hides the game board and scoreboard
 * - Shows the mode selection buttons and description
 */
const backButton = document.getElementById('back-to-mode');
backButton.addEventListener('click', function () {
    document.querySelector('.mode-selection').style.display = 'block';
    document.getElementById('difficulty-selection').style.display = 'none';
    document.querySelector('.welcome').style.display = 'block';
    document.getElementById('game-board').style.display = 'none';
    document.getElementById('scoreboard').style.display = 'none';
    
    backButton.style.display = 'none';
});