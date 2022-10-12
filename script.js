const player = (name) => {
    let playerName = name;
    return { playerName };
}

const gameBoard = ((p1, p2) => {

    const board = ["", "", "", "", "", "", "", "", ""];
    const status = document.querySelector(".status");
    status.innerText = "Good Luck!";

    let turn = 1;
    let player1 = "";
    let player2 = "";

    const restartButton = document.querySelector(".restart");
    restartButton.disabled = true;

    const grid = document.querySelector(".board");
    grid.style.display = "none";

    const getPlayerNames = (p1, p2) => {
        player1 = p1.playerName;
        player2 = p2.playerName;
    }

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            button.innerText = gameTurn(button, index);
            checkWin();
        })
    });

    const gameTurn = (button, index) => {
        if (board[index] === "O" || board[index] === "X") {
            status.innerText = "Space is Taken!";
            if (turn === 1) {
                return player2;
            }
            else {
                return player1;
            }
        }
        else {
            if (turn === 1) {
                turn = 2;
                board[index] = "O";
                button.style.backgroundColor = "#FFCCCB";
                return player1;
            }
            else if (turn === 2) {
                turn = 1;
                board[index] = "X";
                button.style.backgroundColor = "#9FE2BF";
                return player2;
            }
        }
    };

    const checkWin = () => {
        if (board[0] === board[1] && board[1] === board[2] && board[2] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[5] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[8] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[0] === board[3] && board[3] === board[6] && board[6] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[7] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[2] === board[5] && board[5] === board[8] && board[8] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[8] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[6] !== "") {
            if (turn === 1) {
                status.innerText = player2 + " is the Winner!";
                disableButton();
            }
            else {
                status.innerText = player1 + " is the Winner!";
                disableButton();
            }
        }
        else if (board[0] !== "" && board[1] !== "" && board[2] !== "" && board[3] !== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" && board[7] !== "" && board[8] !== "") {
            status.innerText = "Draw!";
            disableButton();
        }
    };

    const resetGame = () => {
        buttons.forEach((button, index) => {
            button.innerText = "";
            board[index] = "";
            button.style.backgroundColor = "";
            button.disabled = false;
        })
        turn = 1;
    };

    const disableButton = () => {
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }


    return { resetGame, getPlayerNames };
})();

function newGameButton() {

    const button = document.querySelector("#name-input");

    button.addEventListener('submit', event => {
        event.preventDefault();

        const p1 = document.querySelector("#playerone");
        const p2 = document.querySelector("#playertwo");
        const startButton = document.querySelector(".start-game");

        const player1 = player(p1.value);
        const player2 = player(p2.value);

        p1.disabled = true;
        p2.disabled = true;
        startButton.disabled = true;

        const grid = document.querySelector(".board");
        grid.style.display = "grid";

        const restartButton = document.querySelector(".restart");
        restartButton.disabled = false;

        gameBoard.resetGame();
        gameBoard.getPlayerNames(player1, player2);
    });
}

function resetGameButton() {
    gameBoard.resetGame();
    const p1 = document.querySelector("#playerone");
    const p2 = document.querySelector("#playertwo");
    const startButton = document.querySelector(".start-game");

    const grid = document.querySelector(".board");
    grid.style.display = "none";

    p1.disabled = false;
    p2.disabled = false;
    startButton.disabled = false;

    const restartButton = document.querySelector(".restart");
    restartButton.disabled = true;

    const status = document.querySelector(".status");
    status.innerText = "Good Luck!";
}
