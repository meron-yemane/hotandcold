import React from 'react';
import './guesscount.css';

export default function GuessCount(props) {
  return (
    <h1 id="numguesses">Guess # {props.count}!</h1>
  );
}