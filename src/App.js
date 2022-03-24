import React, { Component } from 'react';
import './Css/App.css';

import Header from './Components/header.jsx'
import Game from './Components/game.jsx'
import Scoring from './Components/scoring.jsx'
/*
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const correctAnswer = value1 + value2 + value3;
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Scoring />
      </div>
    );
  }
}

export default App;
