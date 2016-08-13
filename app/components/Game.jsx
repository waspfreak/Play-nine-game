var React = require('react');
var StarFrame = require('StarFrame');
var ButtonFrame = require('ButtonFrame');
var AnswerFrame = require('AnswerFrame');
var NumbersFrame = require('NumbersFrame');


var Game = React.createClass({
getInitialState: function(){
  return {numberOfStars: Math.floor(Math.random()*9) +1,
          selectedNumbers: [],
          correct: null };
},
selectNumber: function(selectNumber){
  if(this.state.selectedNumbers.indexOf(selectNumber) < 0){
    this.setState(
      {selectedNumbers: this.state.selectedNumbers.concat(selectNumber)}
    );
  }
},
unselectNumber: function(clickedNumber){
  var selectedNumbers = this.state.selectedNumbers,
      indexOfNumber = selectedNumbers.indexOf(clickedNumber);

  selectedNumbers.splice(indexOfNumber, 1);
  this.setState({selectedNumbers: selectedNumbers});
},
sumOfSelectedNumbers: function(){
  return this.state.selectedNumbers.reduce(function(p,n){
    return p+n;
  }, 0)
},
checkAnswer: function(){
  var correct  = (this.state.numberOfStars === this.sumOfSelectedNumbers());
  this.setState({ correct: correct});
},
  render: function(){
    var selectedNumbers = this.state.selectedNumbers,
        numberOfStars = this.state.numberOfStars,
        correct = this.state.correct
    return(
      <div id="game" className="container">
          <h1>Play Nine</h1>
          <hr/>
          <div>
            <StarFrame numberOfStars={numberOfStars}/>
            <ButtonFrame selectedNumbers={selectedNumbers}
                         correct={correct}
                         checkAnswer={this.checkAnswer} />
            <AnswerFrame selectedNumbers={selectedNumbers}
                         unselectNumber={this.unselectNumber} />
          </div>
          <NumbersFrame selectedNumbers={selectedNumbers}
                        selectNumber={this.selectNumber} />
      </div>
    );
  }
});

module.exports = Game;
