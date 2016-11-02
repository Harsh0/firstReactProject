var React = require('react');
var Si1 = require("./Sib1");
var Si2 = require("./Sib2");
var Com = React.createClass({
  getDefaultProps: function(){
    return {
      fname1 : "First Name"
    };
  },
  render:function(){
    return (
      <div>
      <Si1 fname={this.props.fname} lname="Singhal" />
	     <Si2 temp={this.props.fname1} />
      </div>
    )
  }
})
module.exports = Com;
