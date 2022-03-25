import React from 'react';
import '../Css/App.css';

class Scoring extends React.Component {
  // We don't seem to be able to use the 'direct' way here so ...
  constructor(props) {
    super(props);
    this.incrementCounters = this.props.incrementCounters.bind(this);
    this.makeNewValuesArray = this.props.makeNewValuesArray.bind(this);
    const valuesArray = this.props.valuesArray.slice();
    const displayedAnswer = valuesArray[3];
    const correctAnswer = valuesArray[0] + valuesArray[1] + valuesArray[2];
    const numCorrect = this.props.numCorrect;
    const numQuestions = this.props.numQuestions;
  }

  handleAnswer = (event) => {
    // TASKS
      // Fetch the question
    const displayedAnswer = this.props.valuesArray[3];
      // Calculate the true answer
    const correctAnswer = this.props.valuesArray[0] + this.props.valuesArray[1] + this.props.valuesArray[2];
      // Assess right or wrong
    var correct = false;
    if (correctAnswer === displayedAnswer) {correct = true};
      // Increment BOTH counters as apropriate
    if (correct && (event.target.name === 'true')) {
      this.incrementCounters(true);
    } else if (!correct && (event.target.name === 'false')) {
      this.incrementCounters(true);
    } else {
      this.incrementCounters(false);
    }
      // Reset for new game
    this.makeNewValuesArray();
      // Finish!
   return;
  }

  render() {
    return(
      <div className="test" style={{backgroundColor:'#000066', padding:'0.5em'}}>
        <div>
          <p className="text" style={{color:'#cccccc'}}>
            Displayed answer: {this.props.valuesArray[3]}
          </p>
          <p className="text" style={{color:'#cccccc'}}>
            Calculated answer: {this.props.valuesArray[0] + this.props.valuesArray[1] + this.props.valuesArray[2]}
          </p>
          <p className="text" style={{color:'#cccccc'}}>
            App state correct: {this.props.numCorrect}
          </p>
          <p className="text" style={{color:'#cccccc'}}>
            App state questions: {this.props.numQuestions}
          </p>
        </div>
        <div className="scoring" style={{backgroundColor:'#66aa66', padding:'1em'}}>
          <button onClick={this.handleAnswer} name="true">True</button>
          <button onClick={this.handleAnswer} name="false">False</button>
          <h4 className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </h4>
        </div>
      </div>
     )
  }
}

export default Scoring
