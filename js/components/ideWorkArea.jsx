import React from 'react';

export default React.createClass({

  render: function () {
    let pos = {
        left: this.props.pos.pctLeft + '%'
      };

    if (!this.props.isDivider) {
      pos.width = this.props.pos.pctWidth + '%';
    }

    return (
      <div className={'ide-workarea' + (this.props.isDivider ? ' is-divider' : '')} style={pos}>
        {this.props.children}
      </div>
    );
  }
});