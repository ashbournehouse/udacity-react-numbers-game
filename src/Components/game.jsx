import React from 'react';
import '../Css/App.css';
/*
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;
*/
class Game extends React.Component {
  // We don't seem to be able to use the 'direct' way here so ...
  constructor(props) {
    super(props);
    
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = (Math.floor(Math.random() * 3) + value1 + value2 + value3);
    const numQuestions = 0;
    const numCorrect = 0;
    
    this.state = {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer,
      numQuestions: numQuestions,
      numCorrect: numCorrect,
    };
  }
  render() {
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
    )
  }
}

export default Game