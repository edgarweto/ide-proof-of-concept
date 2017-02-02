import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      enabled: true
    };
  },
  render: function () {
    return (
      <ul className={'app-nav ' + this.props.menuType} data-state={this.state.enabled}>
        {this.props.children}
      </ul>
    );
  }
});