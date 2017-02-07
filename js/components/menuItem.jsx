import React from 'react';

export default React.createClass({

  defaultProps: {
    isDivider: false
  },

  getInitialState: function () {
    return {
      enabled: true,
      childMenuIsOpen: false,
      tabIndex: -1 //Added to be able to fire 'onBlur' event.
    };
  },

  /**
   * @summary Reacts to menu item click.
   */
  _onItemClicked: function (e) {
    e.preventDefault();

    if (this.props.children && this.props.children.length) {
      this._toggleChildMenu(e);
    } else {
      //launch command
    }
  },

  /**
   * @summary Toggles menu dropdown state, if any.
   */
  _toggleChildMenu: function (e) {
    this.setState({
      childMenuIsOpen: !this.state.childMenuIsOpen
    });
  },

  closeChildMenu: function () {
    this.setState({
      childMenuIsOpen: false
    });    
  },

  _onMenuBlur: function (e) {
    var currentTarget = e.currentTarget;

    setTimeout(function() {
      if (!currentTarget.contains(document.activeElement)) {
          this.closeChildMenu();
      }
    }.bind(this), 0);
  },

  /**
   * @summary Renders a menu item along with the child menus.
   */
  render: function () {
    return (
      <li className={'app-menu-item' + (this.props.isDivider ? ' item-divider' : '')} data-enabled={this.state.enabled} onBlur={this._onMenuBlur} tabIndex={this.state.tabIndex}>
        <div className="app-menu-item-content">
          <div className="app-menu-item-caption" onClick={this._onItemClicked}>{this.props.cmdCaption}</div>
          {this.props.children && this.props.children.length > 0 ? 
            (<ul className={'app-menu-group ' + this.props.menuType} data-isOpen={this.state.childMenuIsOpen ? 1 : 0}>
              {this.props.children}
            </ul>)
            : ''}
        </div>
      </li>
    );
  }
});