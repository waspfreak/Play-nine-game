var React = require('react');

var NumbersFrame = React.createClass({

  render: function(){
    var numbers = [], className,
        selectNumber = this.props.selectNumber,
        selectedNumbers = this.props.selectedNumbers;
    for ( var j = 1; j <= 9; j++ ){
        className = "number selected-" + (selectedNumbers.indexOf(j)>=0);
        numbers.push(
        <div className={className}  onClick={selectNumber.bind(null, j)}>{j}</div>
        )
    }
    return(
      <div id="numbers-frame">
         <div className="well">
          {numbers}
        </div>
     </div>
    );
  }
});

module.exports = NumbersFrame;
