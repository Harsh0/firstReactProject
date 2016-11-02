var React = require('react');
var Si1 = require("./Sib1");
var Si2 = require("./Sib2");
var Com = React.createClass({
  getDefaultProps: function(){
    return {
      fname1 : "First Name"
    };
  },
  getInitialState : function(){
    return {
      sData : 0
    }
  },
  clickedBut:function(nD){
    this.setState({sData:this.state.sData+nD});
  },
  render:function(){
    return (
      <div>
      <Si1 fname={this.props.fname} lname={this.state.sData}  />
	     <Si2 temp={this.props.fname1} clickedHandler= {this.clickedBut} />
      </div>
    )
  }
});
module.exports = Com;
