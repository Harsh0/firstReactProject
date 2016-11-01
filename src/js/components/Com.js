var React = require('react');
var Si1 = require("./Sib1");
var Si2 = require("./Sib2");
var Com = React.createClass({
  render:function(){
    return (
      <div>
      <Si1 fname={this.props.fname} lname="Singhal" />
	     <Si2 />
      </div>
    )
  }
})
module.exports = Com;
