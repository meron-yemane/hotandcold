import React from 'react';
import './App.css'
import Guess from './guess.js';
import GuessCount from './guesscount.js';
import PastGuesses from './pastguesses.js';
import Header from './header.js';
import Feedback from './feedback.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedBack: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  newGame() {
    this.setState({
      guesses: [],
      feedBack: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  guess(guess) {
    console.log("inside guess")
    if(isNaN(guess)) {
      this.setState({
        feedBack: "Please enter a number"
      });
      return;
    }
    const difference = Math.abs(guess - this.state.correctAnswer)

    let feedBack;
    if (difference >= 50) {
      feedBack = "Youre ice cold...";
    }
    else if (difference >= 30) {
      feedBack = "Youre cold...";
    }
    else if (difference >= 15) {
      feedBack = "Youre lukewarm.";
    }
    else if (difference >= 5) {
      feedBack = "Youre hot!";
    }
    else if (difference >= 1) {
      feedBack = "Youre very hot!!";
    }
    else {
      feedBack = "You guessed the correct answer! Click New Game to go again!";
    }
    this.setState({
      feedBack: feedBack,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <div id="container">
        <Header onClick={() => this.newGame()} />
        <section className="games">
          <Feedback feedBack={this.state.feedBack} />
          <Guess onSubmit={(guess) => this.guess(guess)} />
          <GuessCount count={this.state.guesses.length + 1} />
          <PastGuesses pastguesses={this.state.guesses} />
        </section>
      </div>

    )
  } 
}




