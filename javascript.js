function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choice.length)
    return choice[random]
}

function gameRound(playerSelection, computerSelection) {
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
    let userChoice = prompt("Choose your weapon: ", "")
    let computerChoice = getComputerChoice()
    let userScore = 0
    let computerScore = 0 
        let gameResult = gameRound(userChoice, computerChoice)
        if (gameResult.includes("You won")) {
            userScore++
            console.log(gameResult)
        }
        else if (gameResult.includes("You lost")) {
            computerScore++
            console.log(gameResult)
        }

    
}   






    /*let gameResult = gameRound(userChoice, computerChoice)
    if (gameResult.includes("You won")) {
        userScore++
    }
    else if (gameResult.includes("You lost")) {
        computerScore++
    }*/
