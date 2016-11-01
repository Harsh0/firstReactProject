var React = require('react');
var ReactDOM = require('react-dom');
var Comm = require('./Components/Com');
var MainComponent = React.createClass({
  render:function(){
    return (
      <div>
        <h3>Hello from React</h3>
        <Comm fname="Harsh"/>
      </div>
    )
  }
});
ReactDOM.render(<MainComponent />,
document.getElementById('app'));
