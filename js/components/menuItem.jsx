import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      enabled: true
    };
  },

  render: function () {
    return (
      <li className="app-menu-item" data-enabled={this.state.enabled}>
        {
          this.props.children && this.props.children.length > 0 ? 
            <div className="app-menu-item-content">
              <div className="app-menu-item-caption">{this.props.cmdCaption}</div>
              <ul className={this.props.menuType}>{this.props.children}</ul>
            </div>
          : 
          this.props.cmdCaption
        }
      </li>
    );
  }
});