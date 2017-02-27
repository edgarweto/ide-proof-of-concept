import React from 'react';

class IdeTabItem extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="ide-tab-item" data-selected={this.props.selected ? '1' : '0'}>
        <span className="dirty">{this.props.dirty ? '*' : ''}</span>
        <span className="title" onClick={this._handleClick.bind(this)}>{this.props.name}</span>
        <span className="close" data-cmd="close">x</span>
      </div>
    );
  }

  _handleClick() {
    this.props.onTabClicked(this.props.index);
  }
}

IdeTabItem.defaultProps = {};

export default IdeTabItem;