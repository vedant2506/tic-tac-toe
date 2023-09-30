// document.addEventListener('DOMContentLoaded', function() {
//     let currentPlayer = 'X';
//     let cells = document.querySelectorAll('.cell');
//     let statusDisplay = document.querySelector('.status');
//     let screens = document.querySelectorAll('.screen');
//     let resetButtons = document.querySelectorAll('.reset-button');

//     function checkWinner() {
//         const winningCombos = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];

//         for (let combo of winningCombos) {
//             const [a, b, c] = combo;
//             if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
//                 return cells[a].innerHTML;
//             }
//         }

//         if ([...cells].every(cell => cell.innerHTML !== '')) {
//             return 'draw';
//         }

//         return null;
//     }

//     function handleClick(event) {
//         if (!event.target.innerHTML) {
//             event.target.innerHTML = currentPlayer;
//             let winner = checkWinner();
//             if (winner) {
//                 if (winner === 'draw') {
//                     screens[2].classList.add('active');
//                 } else {
//                     screens[winner === 'X' ? 0 : 1].classList.add('active');
//                 }
//                 cells.forEach(cell => cell.removeEventListener('click', handleClick));
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
//             }
//         }
//     }

//     function resetGame() {
//         screens.forEach(screen => screen.classList.remove('active'));
//         cells.forEach(cell => {
//             cell.innerHTML = '';
//             cell.addEventListener('click', handleClick);
//         });
//         currentPlayer = 'X';
//         statusDisplay.textContent = "Player X's turn";
//     }

//     resetButtons.forEach(button => button.addEventListener('click', resetGame));
//     resetGame();
// });
document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    let cells = document.querySelectorAll('.cell');
    let statusDisplay = document.querySelector('.status');
    let screens = document.querySelectorAll('.screen');
    let resetButtons = document.querySelectorAll('.reset-button');

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                return cells[a].innerHTML;
            }
        }

        if ([...cells].every(cell => cell.innerHTML !== '')) {
            return 'draw';
        }

        return null;
    }

    function handleClick(event) {
        if (!event.target.innerHTML) {
            event.target.innerHTML = currentPlayer;
            let winner = checkWinner();
            if (winner) {
                if (winner === 'draw') {
                    screens[2].classList.add('active');
                } else {
                    screens[winner === 'X' ? 0 : 1].classList.add('active');
                }
                cells.forEach(cell => cell.removeEventListener('click', handleClick));
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    function resetGame() {
        screens.forEach(screen => screen.classList.remove('active'));
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.addEventListener('click', handleClick);
        });
        currentPlayer = 'X';
        statusDisplay.textContent = "Player X's turn";
    }

    resetButtons.forEach(button => button.addEventListener('click', resetGame));
    resetGame();
});
