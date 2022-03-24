import React from 'react';
import '../Css/App.css';

class Scoring extends React.Component {
  // We don't seem to be able to use the 'direct' way here so ...
  constructor(props) {
    super(props);
    const numCorrect = 0;
    const numQuestions = 0;
    this.state = {
      numCorrect: numCorrect, 
      numQuestions: numQuestions, 
    };
  }

  handleTrueAnswer = () => {
    this.setState(currState => ({
      numCorrect: this.state.numCorrect + 1,
    }));
  };
  
  handleFalseAnswer = () => {
    this.setState(currState => ({
      numQuestions: this.state.numQuestions + 1,
    }));
  };

  render() {
    return(
      <div className="scoring" style={{backgroundColor:'#66aa66', padding:'1em'}}>
        <button onClick={this.handleTrueAnswer} name="true">True</button>
        <button onClick={this.handleFalseAnswer} name="false">False</button>
        <h4 className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </h4>
      </div>
     )
  }
}

export default Scoring
