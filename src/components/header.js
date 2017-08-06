import React from 'react';
import './header.css';

export default function Header(props) {
  return (
    <header id="head">
      <nav id="newGame">
        <button type="button" onClick={props.onClick}>
             + New Game
        </button>
      </nav>
        <h1 id="title">HOT or COLD</h1>
    </header>
  );
}