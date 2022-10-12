const player = (name) => {
    let playerName = name;
    return { playerName };
}

const gameBoard = ((name) => {

    const board = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];

    let turn = 1;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            button.innerText = checkTurn(button.innerText);
            checkWin(buttons);
        })
    });

    const checkTurn = (button) => {
        if (button === "O" || button === "X") {
            console.log("Space is Taken");
            return button;
        }
        else {
            if (turn === 1) {
                turn = 2;
                return "O";
            }
            else if (turn === 2) {
                turn = 1;
                return "X";
            }
        }
    };

    const checkWin = (button) => {
        if (button[0].innerText === button[1].innerText && button[1].innerText === button[2].innerText && button[2].innerText !== "0") {
            console.log("Row 1");
        }
        else if (button[3].innerText === button[4].innerText && button[4].innerText === button[5].innerText && button[5].innerText !== "0") {
            console.log("Row 2");
            
        }
        else if (button[6].innerText === button[7].innerText && button[7].innerText === button[8].innerText && button[8].innerText !== "0") {
            console.log("Row 3");
        }
        else if (button[0].innerText === button[3].innerText && button[3].innerText === button[6].innerText && button[6].innerText !== "0") {
            console.log("Col 1");
        }
        else if (button[1].innerText === button[4].innerText && button[4].innerText === button[7].innerText && button[7].innerText !== "0") {
            console.log("Col 2");
        }
        else if (button[2].innerText === button[5].innerText && button[5].innerText === button[8].innerText && button[8].innerText !== "0") {
            console.log("Col 3");
        }
        else if (button[0].innerText === button[4].innerText && button[4].innerText === button[8].innerText && button[8].innerText !== "0") {
            console.log("Diag 1");
        }
        else if (button[2].innerText === button[4].innerText && button[4].innerText === button[6].innerText && button[6].innerText !== "0") {
            console.log("Diag 2");
        }
        else {

        }
    };


    return {};
})();


