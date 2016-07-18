import React from 'react';
import ReactDOM from 'react-dom';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

Include = React.createClass({
  componentDidMount: function() {
    var componentRoot = ReactDOM.findDOMNode(this);
    var {template, ...props} = this.props
    var parentNode = componentRoot.parentNode;
    parentNode.removeChild(componentRoot);
    return this.view = Blaze.renderWithData(Template[template], props, parentNode);
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render: function(template) {
    return (<div />)
  }
})

export default Include
