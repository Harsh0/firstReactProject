var React = require('react');
var Gc = require('./grandChild');
var Com = React.createClass({
  render:function(){
    return (
      <div>
      <p>Welcome {this.props.fname} {this.props.lname}</p>
      <Gc />
      </div>
    )
  }
});
module.exports = Com;
