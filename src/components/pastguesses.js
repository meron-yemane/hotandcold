import React from 'react';
import './pastguesses.css';

export default function PastGuesses(props) {
  const guesses = props.pastguesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <ul id="pastGuesses" className="guestbox">
      {guesses}
    </ul>
  )
}