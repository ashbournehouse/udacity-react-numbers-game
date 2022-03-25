import React from 'react';
import '../Css/App.css';

// Only displaying state from the App component so use a stateless function

function Game (props) {
  const valuesArray = props.valuesArray.slice();
  return(
    <div className="game">
      <h2>Mental Maths</h2>
      <div className="equation">
        <p className="text">{`${valuesArray[0]} + ${valuesArray[1]} +
          ${valuesArray[2]} = ${valuesArray[3]}`}
        </p>
      </div>
      <div className="test" style={{backgroundColor:'#aa6666', padding:'0.5em'}}>
        <p className="text">Correct answer:
          {valuesArray[0] + valuesArray[1] + valuesArray[2]}
        </p>
      </div>
    </div>
  )
}

export default Game