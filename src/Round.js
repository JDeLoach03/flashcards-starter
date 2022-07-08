const Turn = require('../src/Turn');


class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuess = [];
    }

    returnCurrentCard() {
       return this.currentCard;
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)

        if(!turn.evaluateGuess()) {
            this.incorrectGuess.push(this.currentCard.id)
        }

        this.turns++;
    }
}




module.exports = Round;