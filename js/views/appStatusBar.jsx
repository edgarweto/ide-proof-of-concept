import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      busy: false
    };
  },

  render: function () {
    return (
      <div className="app-status-bar">
        <ul className="app-status-bar-current to-left">
          <li>{this.state.busy ? 'Busy' : 'Ready'}</li>
        </ul>
        <ul className="app-status-bar-global to-right"></ul>
      </div>
    );
  }
});