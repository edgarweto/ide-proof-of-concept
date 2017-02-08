import React from 'react';
import Defs from 'appRoot/mixins/definitions';
import IdeWorkArea from 'appRoot/components/ideWorkArea';

export default React.createClass({
  getInitialState: function () {
    return {
      orientation: Defs.ORIENTATIONS.VERTICAL
    };
  },

  componentWillMount: function () {
    // Resize children?
    let nWorkAreas = this.props.children ? this.props.children.length : 0,
      nDividers = Math.floor(nWorkAreas / 2),
      dividerWidth = 4;//px

    let x = 0;
    for (let i = 0; i < nWorkAreas; i++) {
      let child = this.props.children[i];
      console.log("Child", child);
      //child.style.left = (25 * i) + '%';
    }
  },

  render: function () {
    return (
      <div className="ide-workarea-container" data-orientation={this.state.orientation}>
        {this.props.children}
      </div>
    );
  }
});