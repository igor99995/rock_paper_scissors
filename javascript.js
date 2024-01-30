function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choice.length)
    console.log(random)
    return choice[random]
}