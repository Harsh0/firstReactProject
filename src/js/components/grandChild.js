var React = require('react');
var grandChild = React.createClass({
  render:function(){
    return (
      <div>
      <p>Welcome from grandChildren</p>
      </div>
    )
  }
})
module.exports = grandChild;
