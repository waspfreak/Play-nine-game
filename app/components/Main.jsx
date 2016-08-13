var React = require('react');
var Card = require('Card');
var Game = require('Game');


var Main = React.createClass({

  render: function(){
    return(
      <div>
        <Game/>
      </div>
    );
  }
});

module.exports = Main;
