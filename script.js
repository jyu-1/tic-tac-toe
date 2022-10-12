const player = (name) => {
    let playerName = name;
    return { playerName };
}

const gameBoard = ((name) => {

    const board = ["", "", "", "", "", "", "", "", ""];

    let turn = 1;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            button.innerText = checkTurn(index);
            checkWin();
        })
    });

    const checkTurn = (index) => {
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
            console.log("Row 1");
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[5] !== "") {
            console.log("Row 2");
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[8] !== "") {
            console.log("Row 3");
        }
        else if (board[0] === board[3] && board[3] === board[6] && board[6] !== "") {
            console.log("Col 1");
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[7] !== "") {
            console.log("Col 2");
        }
        else if (board[2] === board[5] && board[5] === board[8] && board[8] !== "") {
            console.log("Col 3");
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[8] !== "") {
            console.log("Diag 1");
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[6] !== "") {
            console.log("Diag 2");
        }
        else {
            return;
        }
    };


    return {};
})();


