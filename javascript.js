function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choice.length)
    return choice[random]
}

function gameRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    let result
    const validChoices = ["rock", "paper", "scissors"]
    if (validChoices.includes(playerSelection) && playerSelection === computerSelection) {
        result = "It's a tie!"
    }
    else if (!(validChoices.includes(playerSelection))) {
        result = "Please insert a valid value"
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "You lost! Paper beats rock"
        }
        else if (computerSelection === "scissors") {
            result = "You won! Rock beats scissors"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You won! Paper beats rock"
        }
        else if (computerSelection === "scissors") {
            result = "You lost! Scissors beats paper"
        }
    
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lost! Rock beats scissors"
        }
        else if (computerSelection === "paper") {
            result = "You won! Scissors beats paper"
        }
    }
    return result 
}

function playGame() {
    let userScore = 0
    let computerScore = 0
    while (userScore < 5 && computerScore < 5) {
        let userChoice = prompt("Choose your weapon:", "")
        let computerChoice = getComputerChoice()
        let gameResult = gameRound(userChoice, computerChoice)
        if (gameResult.includes("You won")) {
            userScore++
            console.log(gameResult + `\n\nYour score: ${userScore}\nComputer score: ${computerScore}`)
        }
        else if (gameResult.includes("You lost")) {
            computerScore++
            console.log(gameResult + `\n\nYour score: ${userScore}\nComputer score: ${computerScore}`)
        }
        else {
            console.log(gameResult + `\n\nYour score: ${userScore}\nComputer score: ${computerScore}`)
        }

        if(userScore === 5) {console.log (`\nCongratulations!!!\n\nYou won the rock,paper and scissors with a score of ${userScore}`)};
        if(computerScore === 5) {console.log(`\nYou stupid mf!!!\n\nJust lost to a machine with the poor score of ${userScore}`)};
    }
}

let btnRock = document.querySelector('#rock')
let btnPaper = document.querySelector('#paper')
let btnScissors = document.querySelector('#scissors')
let buttons = document.querySelector('#buttons')

buttons.addEventListener('click', (e) => {
    let btnChoice = e.target.getAttribute('id')
    console.log(gameRound(btnChoice))
})
