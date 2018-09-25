import React, { Component } from 'react';
import "../App/App.css";

const Modal = ({ currentScore }) => (
  <div className="wrapper-modal">
    <h1 className="title-modal">Game Over!</h1>
    <p className="score-modal">Your score: {currentScore}</p>
  </div>
);

export default Modal;