import React from 'react';

class IdeWorkArea extends React.Component {
  render() {
    let pos = {};
    if (this.props.pos.isHorizontal) {
      pos = {
        left: this.props.pos.pctLeft + '%',
        width: this.props.pos.pctWidth + '%'
      };
    } else {
      pos = {
        top: this.props.pos.pctTop + '%',
        height: this.props.pos.pctHeight + '%'
      };
    }

    return (
      <div className={'ide-workarea'} style={pos}>
        {this.props.children}
      </div>
    );    
  }
}

export default IdeWorkArea;