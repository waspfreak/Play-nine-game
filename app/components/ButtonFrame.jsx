var React = require('react');

var ButtonFrame = React.createClass({
  render: function(){
    var disabled, button, correct = this.props.correct;

    switch (correct) {
      case true:
        button = (
            <button className="btn btn-success btn-large">
              <span className= "glyphicon glyphicon-ok"></span>
            </button>
        );
        break;
      case false:
      button = (
          <button className="btn btn-danger btn-large">
            <span className= "glyphicon glyphicon-remove"></span>
          </button>
      );
        break;
      default:
      disabled = (this.props.selectedNumbers.lenght === 0);
      button = (
        <button className="btn btn-primary btn-large" disabled={disabled}
                onClick={this.props.checkAnswer}>
                =
        </button>
      );

    }
    return(
      <div id="button-frame">
        {button}
      </div>
    );
  }
});

module.exports = ButtonFrame;
