var React = require('react');
var Com = React.createClass({
  render:function(){
    return (
      <div>
      <p>Welcome {this.props.fname} {this.props.lname}</p>
      </div>
    )
  }
})
module.exports = Com;
