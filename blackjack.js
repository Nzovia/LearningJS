let firstCard = 10
let secondCard = 11
//create cards arary
let cards = [firstCard, secondCard]
let cardSum = firstCard + secondCard
let hasBlackJack = false
let message = " "
let newMessage = document.getElementById("message-el")
let sumEl = document.getElementById("resultSum")
let cardEl = document.getElementById("carlds-el")
function playGame() {
    // create logic of the blackjack game
    cardEl.innerText = "Cards: " + cards[0] + " ; " + cards[1]
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
    zss
    let card = 7
    cardSum += card

    playGame()
}