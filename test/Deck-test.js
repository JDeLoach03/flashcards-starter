const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
      });
    
    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should be able to store the card objects within an array', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const deck = new Deck([card1, card2, card3]);
           
        expect(deck.cards).to.be.an('array')
        expect(deck.cards[0]).to.be.an.instanceof(Card);
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    })

    it('should be able to count cards', function() {
        const card1 = new Card(1, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        const card2 = new Card(14, 'What type of protoype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        const card3 = new Card(12, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.equal(3)
    })
});
