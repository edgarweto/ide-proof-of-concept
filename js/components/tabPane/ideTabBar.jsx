import React from 'react';

class IdeTabBar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render () {
    return (
      <div className="ide-tab-bar">
        {this.props.children}
      </div>
    );
  }
}

IdeTabBar.defaultProps = {};

export default IdeTabBar;