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
    /*
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    */
    //Replace the bit above with an array ..easier to pass around!
    const valuesArray = this.makeNewValuesArray();
    const numQuestions = 0;
    const numCorrect = 0;
    
    this.state = {
      valuesArray: valuesArray,
      numQuestions: numQuestions,
      numCorrect: numCorrect,
    };
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
    return tempArray;    
  }

  render() {
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.state.valuesArray[0]} + ${this.state.valuesArray[1]} + ${this.state.valuesArray[2]} = ${this.state.valuesArray[3]}`}</p>
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