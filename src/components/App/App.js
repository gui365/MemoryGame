import React, { Component } from 'react';
import Characters from "../Characters/Characters.js";
import Modal from "../Modal/Modal.js";
import Header from "../Header/Header.js"
import characters from "../../characters.json";
import './App.css';

class App extends Component {
  state ={
    characters,
    highScore: sessionStorage.getItem("highScore"),
    currentScore: 0,
    gameOver: false
  };

  sortArray = array => array.sort((a,b) => 0.5 - Math.random());

  checkWinLose = id => {
    let clickedCharacter = this.state.characters.filter(character => character.id === id);
    // clickedCharacter[0].selected === false ? this.isFalse(id) : this.state.gameOver = true;
    if (!clickedCharacter[0].selected) {
      this.isFalse(id)
    } else {
      this.setState({
        gameOver: true
      })
    }
    // this.displayModal(this.state.gameOver);
    console.log(id);
    console.log(this.state.gameOver);
  }

  isFalse = id => {
    let clickedCharacter = this.state.characters.filter(character => character.id === id);
    let indexOfCharacter = this.state.characters.indexOf(clickedCharacter[0]);
    characters[indexOfCharacter].selected = true;

    this.setState({ 
      characters,
      currentScore: this.state.currentScore + 1
    });
    // console.log("false");
  }

  displayModal = (gameOver) => {
    if (gameOver === true) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      if (this.state.currentScore > sessionStorage.getItem("highScore")) {
        sessionStorage.setItem("highScore", this.state.currentScore);
      }
      return <Modal currentScore={this.state.currentScore} />;
    } 
  }
  
  render() {
    return (
      <div className="App">
        <Header currentScore={this.state.currentScore} highScore={this.state.highScore}/>
        <main className="flex justify-center">
          <div className="wrapper">
            {
              this.sortArray(this.state.characters).map(({ id, image, selected }) => (
                <Characters
                  id={id}
                  key={id}
                  image={image}
                  selected={selected}
                  checkWinLose={this.checkWinLose}
                />
              ))
            }
          </div>
          {this.displayModal(this.state.gameOver)}
        </main>
      </div>
    );
  };
}

export default App;
