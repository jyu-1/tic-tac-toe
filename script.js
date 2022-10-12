const player = (name) => {
    let playerName = name;
    return { playerName };
}

const gameBoard = ((p1, p2) => {

    const board = ["", "", "", "", "", "", "", "", ""];

    let turn = 1;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            button.innerText = gameTurn(index);
            checkWin();
        })
    });

    const gameTurn = (index) => {
        if (board[index] === "O" || board[index] === "X") {
            console.log("Space is Taken");
            return board[index];
        }
        else {
            if (turn === 1) {
                turn = 2;
                board[index] = "O";
                return "O";
            }
            else if (turn === 2) {
                turn = 1;
                board[index] = "X";
                return "X";
            }
        }
    };

    const checkWin = () => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[5] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[8] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[0] === board[3] && board[3] === board[6] && board[6] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[7] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[2] === board[5] && board[5] === board[8] && board[8] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[8] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[6] !== "") {
            if (turn === 1) {
                alert("Player 2 Wins");
                resetGame();
            }
            else {
                alert("Player 1 Wins");
                resetGame();
            }
        }
        else if (board[0] !== "" && board[1] !== "" && board[2] !== "" && board[3] !== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" && board[7] !== "" && board[8] !== "") {
            alert("Draw!");
            resetGame();
        }
    };

    const resetGame = () => {
        buttons.forEach((button, index) => {
            button.innerText = "";
            board[index] = "";
        })
        turn = 1;
    };


    return {};
})();


