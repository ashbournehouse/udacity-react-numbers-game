import React from 'react';
import './Css/App.css';

import Header from './Components/header.jsx';
import Game from './Components/game.jsx';
import Scoring from './Components/scoring.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const valuesArray = this.initialiseValuesArray();
    const numQuestions = 0;
    const numCorrect = 0;

    this.state = {
      valuesArray: valuesArray,
      numQuestions: numQuestions,
      numCorrect: numCorrect,
    };
  }

  initialiseValuesArray = () => {
    var tempArray = [];
    var tempSum = 0;
    for(var i=0; i < 3; i++){
      const value = Math.floor(Math.random() * 100)
      tempArray.push(value);
      tempSum += value
    }
    tempArray.push(Math.floor(Math.random() * 3) + tempSum);
    return tempArray;
  }

  makeNewValuesArray = () => {
    var tempArray = [];
    var tempSum = 0;
    for(var i=0; i < 3; i++){
      const value = Math.floor(Math.random() * 100)
      tempArray.push(value);
      tempSum += value
    }
    tempArray.push(Math.floor(Math.random() * 3) + tempSum);
    this.setState((currState) => ({
      valuesArray: tempArray.slice(),
      //numQuestions: currState.numQuestions + 1
    }))
    return
  }

  incrementCounters = (win) => {
    this.setState((currState) => ({
      numQuestions: currState.numQuestions + 1
    }))
    if (win) {
      this.setState((currState) => ({
        numCorrect: currState.numCorrect + 1
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <h4>{this.state.valuesArray}</h4>
          <h4>{this.state.numCorrect}/{this.state.numQuestions}</h4>
        </div>
        <Game valuesArray={this.state.valuesArray} />
        <Scoring
          valuesArray={this.state.valuesArray}
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}
          incrementCounters={this.incrementCounters}
          makeNewValuesArray={this.makeNewValuesArray}
        />
      </div>
    );
  }
}

export default App;
