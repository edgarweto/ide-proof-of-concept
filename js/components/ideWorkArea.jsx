import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className={'ide-workarea' + (this.props.isDivider ? ' is-divider' : '')}>
        {this.props.children}
      </div>
    );
  }
});