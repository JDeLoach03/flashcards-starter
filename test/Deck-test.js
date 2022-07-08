const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;

    beforeEach(() => {
        deck = new Deck([card1, card2, card3])
        card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    })

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
      });
    
    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should be able to store the card objects within an array', function() {   

        expect(deck.cards).to.be.an('array')
        expect(deck.cards[0]).to.be.an.instanceof(Card);
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    })

    it('should be able to count cards', function() {

        let countCards = deck.countCards()
        expect(countCards).to.equal(3)
    })
});
