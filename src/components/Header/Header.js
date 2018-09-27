import React from 'react';
import "../App/App.css";

const Header = ({ currentScore, highScore }) => (
  <header className="App-header flex">
      <div className="flex align-center">
    <img src="./images/logo.png" className="logo" alt="logo" />
    <h1 className="App-title">Memory Game</h1>
      </div>
      <div className="flex align-center flex-column">
    <div className="flex align-center">
      <h2>Your Score: </h2><span className="score" id="current-score">{currentScore}</span>
    </div>
    <div className="flex align-center">
      <h2>High Score: </h2><span className="score" id="high-score">{highScore}</span>
    </div>
      </div>
  </header>
);

export default Header;