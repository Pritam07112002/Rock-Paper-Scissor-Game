const comp = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;
var win = true;

//how computer take choice
const compChoice = () => {
    const compPlay = Math.floor(Math.random() * 3);
    const compPickChoice = comp[compPlay];
    // console.log(compPickChoice);
    return compPickChoice;
};

//how to play game
const userChoice = (turn) => {
    const compTurn = compChoice();

    if (turn === compTurn) {
        document.getElementsByClassName("win-status")[0].innerHTML = "Game was draw";
        document.getElementsByClassName("win-status")[0].style.backgroundColor = "gray";
        document.getElementsByClassName("conclusion")[0].innerHTML = `Bot choose ${compTurn}`;
    }
    else {
        otherOption(turn, compTurn);
    }
}

const otherOption = (turn, compTurn) => {
    if (turn === "rock") {
        //comp-> scissors,paper
        win = (compTurn === "scissors") ? true : false;
    }
    else if (turn == "paper") {
        //comp-> rock, scissors
        win = compTurn === "rock" ? true : false;
    }
    else {
        //comp-> rock,paper
        win = compTurn === "paper" ? true : false;
    }
    checkWin(win, compTurn);
}

const checkWin = (win, compTurn) => {
    if (win == true) {
        userScore++;
        document.getElementsByClassName("user")[0].innerText = "User : " + userScore;
        document.getElementsByClassName("win-status")[0].innerHTML = "You win";
        document.getElementsByClassName("win-status")[0].style.backgroundColor = "rgb(52, 188, 52)";
        document.getElementsByClassName("win-status")[0].style.color = "white";
        document.getElementsByClassName("conclusion")[0].innerHTML = `Bot choose ${compTurn}`;
    }
    else {
        compScore++;
        document.getElementsByClassName("computer")[0].innerText = "Bot : " + compScore;
        document.getElementsByClassName("win-status")[0].innerHTML = "Bot win";
        document.getElementsByClassName("win-status")[0].style.backgroundColor = "rgb(201, 62, 62)";
        document.getElementsByClassName("win-status")[0].style.color = "white";
        document.getElementsByClassName("conclusion")[0].innerHTML = `Bot choose ${compTurn}`;
    }
};
