import React from 'react';


class IdeTabContainer extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="ide-tab-container">
        {this.props.children}
      </div>
    );
  }
}

IdeTabContainer.defaultProps = {};

export default IdeTabContainer;