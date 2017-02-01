import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      enabled: false
    };
  },
  render: function () {
    return (
      <ul className={'app-menu ' + this.props.menuType} data-state={this.state.enabled}>
        {this.props.children}
      </ul>
    );
  }
});