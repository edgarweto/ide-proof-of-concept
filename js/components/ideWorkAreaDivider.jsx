import React from 'react';
import IdeWorkArea from 'appRoot/components/ideWorkArea';

class IdeWorkAreaDivider extends IdeWorkArea {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
      isDragging: false,
      sttLeft: 0,
      sttTop: 0
    };
  }

  componentDidUpdate(props, state) {

    if (this.state.isDragging && !state.isDragging) {
console.log("START DnD");
      document.addEventListener('mousemove', this._onMouseMove.bind(this));
      document.addEventListener('mouseup', this._onMouseUp.bind(this));
    } else if (!this.state.isDragging && state.isDragging) {
console.log("STOP DnD");
      document.removeEventListener('mousemove', this._onMouseMove.bind(this));
      document.removeEventListener('mouseup', this._onMouseUp.bind(this));
    }
  }

  _onMouseDown(e) {
    //only left mouse button
    if (e.button !== 0) {
      return;
    }
    let box = this.refs.draggable.getBoundingClientRect();
console.log("MouseDown", box);

    this.setState({
      isDragging: true,
      sttLeft: e.pageX - box.left,
      sttTop: e.pageY - box.top
    });
    e.stopPropagation();
    e.preventDefault();
  }

  _onMouseMove(e) {
    if (this.state.isDragging) {
      this.props.onMoved({
        dx: e.pageX - this.state.sttLeft,
        dy: e.pageY - this.state.sttTop
      });
    }
  }

  _onMouseUp(e) {
    this.setState({
      isDragging: false
    });

    e.stopPropagation();
    e.preventDefault();
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
      <div className="ide-workarea is-divider" ref="draggable" style={pos} onClick={this._onMouseDown.bind(this)}>
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
