import React from 'react';
import IdeWorkArea from 'appRoot/components/ideWorkArea';

class IdeWorkAreaSplitter extends IdeWorkArea {
  constructor(props) {
    super(props);

    //this._onMouseDown = this._onMouseDown.bind(this);

    this.state = {
      isDragging: false,
      sttLeft: 0,
      sttTop: 0
    };
  }

  componentDidUpdate(props, state) {
    if (this.state.isDragging && !state.isDragging) {
      document.addEventListener('mousemove', this._onMouseMove.bind(this));
      document.addEventListener('mouseup', this._onMouseUp.bind(this));
    } else if (!this.state.isDragging && state.isDragging) {
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

    this.setState({
      isDragging: true,
      sttLeft: e.pageX,
      sttTop: e.pageY
    });
    e.stopPropagation();
    e.preventDefault();
  }

  _onMouseMove(e) {
    if (this.state.isDragging) {
      this.props.fn.onMoved({
        x: this.props.pos.isHorizontal ? e.pageX - this.state.sttLeft : 0,
        y: this.props.pos.isHorizontal ? 0 : e.pageY - this.state.sttTop
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
      <div className="ide-workarea is-splitter" ref="draggable" style={pos} onMouseDown={this._onMouseDown.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

IdeWorkAreaSplitter.propTypes = {}
IdeWorkAreaSplitter.defaultProps = {
  isSplitter: true,
  parent: null,
  fn: {
    onMoved: null
  }
}


export default IdeWorkAreaSplitter;
