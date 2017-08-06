import React from 'react';
import './feedback.css';

export default function Feedback(props) {
  return (
    <h1 id="feed">{props.feedBack}</h1>
  );
}