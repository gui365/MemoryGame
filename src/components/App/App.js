import React, { Component } from 'react';
import Characters from "../Characters/Characters.js"
import characters from "../../characters.json";
import './App.css';

class App extends Component {
  state ={
    characters
  };

  sortArray = array => array.sort((a,b) => 0.5 - Math.random());
  
  render() {
    return (
      <div className="App">
        <header className="App-header flex">
          <div className="flex align-center">
            <img src="./images/logo.png" className="logo" alt="logo" />
            <h1 className="App-title">Memory Game</h1>
          </div>
          <div className="flex align-center flex-column">
            <h2>Your Score: </h2>
            <h2>High Score: </h2>
          </div>
        </header>
        <main className="flex justify-center">
          <div className="wrapper">
            {
              this.sortArray(this.state.characters).map(({ id, image, selected }) => (
                <Characters
                  id={id}
                  key={id}
                  image={image}
                />
              ))
            }
          </div>
        </main>
      </div>
    );
  };
}

export default App;
