var React = require('react');
var Com = React.createClass({
  render:function(){
    return (
      <div>
      <p>Hello from Sibling 2</p>
      <p>{this.props.temp}</p>
      </div>
    )
  }
})
module.exports = Com;
