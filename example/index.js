var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var createStubbedContext = require('../dist');

var TestComponent = createReactClass({
  render: function() { return React.createElement('div', null, this.context.foo); }
});

var div = document.createElement('div');

var StubbedComponent = createStubbedContext(TestComponent, { foo: 'bar' });
var stubbedComponentElement = ReactDOM.render(React.createElement(StubbedComponent), div);

document.body.appendChild(div);
