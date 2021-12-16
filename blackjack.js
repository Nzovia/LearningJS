let firstCard = 10
let secondCard = 10
let cardSum = firstCard + secondCard
let hasBlackJack = false
let message = " "
let newMessage = document.getElementById("message-el")

function playGame() {
    // create logic of the blackjack game
    if (sum <= 20) {
        message = "Do you want to draw a new card?"


    } else if (sum === 21) {
        // === strictly equals to , = assignement
        message = " Woho, you got BlackJack! "
        hasBlackJack = true

    } else {
        message = "You are out of the game! "

    }
    // logout the message
    // console.log(message)
    newMessage.textContent = message

}