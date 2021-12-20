let firstCard = 10
let secondCard = 11
let cardSum = firstCard + secondCard
let hasBlackJack = false
let message = " "
let newMessage = document.getElementById("message-el")
let sumEl = document.getElementById("resultSum")
let cardEl = document.getElementById("carlds-el")
function playGame() {
    // create logic of the blackjack game
    cardEl.innerText = "Cards: " + firstCard + " ; " + secondCard
    sumEl.innerText = "Sum: " + cardSum
    if (cardSum <= 20) {
        message = "Do you want to draw a new card? 🤪🤪"



    } else if (cardSum === 21) {
        // === strictly equals to , = assignement
        message = " Woho, you got BlackJack! 😃😃"
        hasBlackJack = true

    } else {
        message = "You are out of the game! 😒😒"


    }
    // logout the message
    // console.log(message)
    newMessage.textContent = message

}

//newcard function
function newCard() {
    let card = 7
    cardSum += card

    playGame()
}