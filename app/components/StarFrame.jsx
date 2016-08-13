var React = require('react');

var StarFrame = React.createClass({


  render: function(){
    //var numberOfStars = 5;
    //var numberOfStars = Math.floor(Math.random()*9) +1;
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++){
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      );
    }
    return(
      <div id="star-frame">
        <div className="well">
        {stars}
       </div>
      </div>
    );
  }
});

module.exports = StarFrame;
