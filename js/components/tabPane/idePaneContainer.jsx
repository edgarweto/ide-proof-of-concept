import React from 'react';
import IdeTabBar from 'appRoot/components/tabPane/ideTabBar';
import IdeTabContainer from 'appRoot/components/tabPane/ideTabContainer';

class IdePaneContainer extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render () {
    return (
      <div className="ide-pane-container">
        <IdeTabBar/>
        <IdeTabContainer>
          {this.props.children}
        </IdeTabContainer>
      </div>
    );
  }
}

IdePaneContainer.defaultProps = {};

export default IdePaneContainer;