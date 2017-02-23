import React from 'react';
import IdeTabBar from 'appRoot/components/tabPane/ideTabBar';
import IdeTabContainer from 'appRoot/components/tabPane/ideTabContainer';
import IdeTabItem from 'appRoot/components/tabPane/ideTabItem';

class IdePaneContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      curSelected: 0
    };
  }

  _onTabItemClicked(ev) {
    console.log("Tab clicked:", ev);
  }

  render () {
    // For each child view, create a tab menu
    let tabMenu = React.Children.map(this.props.children, (child, idx) => {
      return <IdeTabItem name={child.props.name} dirty={false} selected={0 === idx} onTabClicked={this._onTabItemClicked} />
    });

    return (
      <div className="ide-pane-container">
        <IdeTabBar>
          {tabMenu}
        </IdeTabBar>
        <IdeTabContainer>
          {this._renderChildren()}
        </IdeTabContainer>
      </div>
    );
  }

  _renderChildren() {
    return React.Children.map(this.props.children, (child, idx) => {
      return React.cloneElement(child, {
        active: idx === this.state.curSelected
      });
    });
  }
}

IdePaneContainer.defaultProps = {};

export default IdePaneContainer;