import React from 'react';
import './guess.css';

export default class Guess extends React.Component {
  submitGuess(e) {
    e.preventDefault();
    console.log("this.inputs: " + this.inputs);
    let value = this.inputs.value;
    this.props.onSubmit(value);
    this.inputs.value = "";
  }

  render () {
    return (
      <form id="guessContainer" onSubmit={e => this.submitGuess(e)}>
        <input id="guess" type="number" autoComplete="off" min="1" max="100" 
        ref={myinput => this.inputs=myinput} placeholder="Enter your Guess" required/> 
        <input type="submit" id="guessbutton" value="Guess" className="button"/>
      </form>
    );
  }
}