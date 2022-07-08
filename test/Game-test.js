const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')


describe('Game', function() {
    let cardsData;
    let cards;
    let game;

    beforeEach(() => {
      cardsData = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }, {
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswers": "array"
      }, {
        "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"
      }];
    })
    game = new Game()

    it('should be a function', function() {
        expect(game).to.be.a('function')
    })
});

    
