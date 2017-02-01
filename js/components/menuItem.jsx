import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      enabled: false
    };
  },

  render: function () {
    return (
      <li className="app-menu-item" data-enabled={this.state.enabled}>{this.props.cmdCaption}</li>
    );
  }
});