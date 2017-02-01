import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      enabled: false
    };
  },

  render: function () {
    return (
      <li className="app-menu-item">{this.props.cmdCaption}</li>
    );
  }
});