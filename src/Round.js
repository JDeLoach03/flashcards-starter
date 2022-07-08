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
        this.turns++;
        let turn = new Turn(guess, this.currentCard)

        if(!turn.evaluateGuess()) {
            this.incorrectGuess.push(this.currentCard.id)
            this.currentCard = this.deck[this.turns]
        } 

        this.currentCard = this.deck[this.turns]

        return turn.giveFeedback()
    }

    calculatePercentageCorrect() {
        return ((this.turns - this.incorrectGuess.length) / this.turns) * 100
    }

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
    }

}




module.exports = Round;