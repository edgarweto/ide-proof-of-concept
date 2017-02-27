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

  render () {
    // For each child view, create a tab menu
    let tabMenu = React.Children.map(this.props.children, (child, idx) => {
      return <IdeTabItem name={child.props.name} index={idx} dirty={false} selected={this.state.curSelected === idx} onTabClicked={this._onTabItemClicked.bind(this)} />
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

  _onTabItemClicked(index) {
    this.setState({
      curSelected: index
    });
  }
}

IdePaneContainer.defaultProps = {};

export default IdePaneContainer;