import React from 'react';
import IdeWorkArea from 'appRoot/components/ideWorkArea';

class IdeWorkAreaDivider extends IdeWorkArea {
  constructor(props) {
    super(props);
  }

  render() {
    let pos = {};
    if (this.props.pos.isHorizontal) {
      pos = {
        left: this.props.pos.pctLeft + '%'
      };
    } else {
      pos = {
        top: this.props.pos.pctTop + '%'
      };
    }

    return (
      <div className="ide-workarea is-divider" style={pos}>
        {this.props.children}
      </div>
    );
  }
}

IdeWorkAreaDivider.propTypes = {}
IdeWorkAreaDivider.defaultProps = {
  isDivider: true
}

export default IdeWorkAreaDivider;
