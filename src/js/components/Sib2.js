var React = require('react');
var Com = React.createClass({
  render:function(){
    return (
      <div>
      <p>Hello from Sibling 2</p>
      <p>{this.props.temp}</p>
      <button onClick={this.props.clickedHandler.bind(null,5)}>click to add 5</button> <br/>
      <input  type="button" onClick={this.props.clickedHandler.bind(null,10)} value="clickToAdd10"/>
      </div>
    )
  }
})
module.exports = Com;
