import React from 'react';
import ReactDOM from 'react-dom';
import Defs from 'appRoot/mixins/definitions';
import IdeWorkArea from 'appRoot/components/ideWorkArea';
import assert from 'appRoot/utils/assert';

class IdeWorkAreaContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      pxWidth: 0,
      pxHeight: 0
    };
  }

  componentDidMount() {
    let box = ReactDOM.findDOMNode(this.refs.container).getBoundingClientRect();
    this.setState({
      pxWidth: box.width,
      pxHeight: box.height
    });
  }

  _calcOrientation() {
    if (!this._cache || !this._cache.orientation) {
      this._cache = this._cache || {};
      this._cache.orientation = {
        isHorizontal: this.props.orientation === 'horizontal'
      };
    }
    return this._cache.orientation;
  }

  /**
   * @summary Recalculate percentual sizes of children. Dividers are px widh, not percentual.
   */
  _resizeChildren() {
    if (this.state.pxWidth && this.state.pxHeight) {
      let orientation = this._calcOrientation();

      // How many children areas/dividers are there
      let nChilds = this.props.children ? this.props.children.length : 0,
        nWorkAreas = (nChilds + 1) / 2,//TODO check as an assert
        nDividers = nWorkAreas - 1,//TODO check as an assert
        pxDividerSize = 4;//TODO: read from CSS

      // Calculate sizes in pct
      let pxTotalSize = orientation.isHorizontal ? this.state.pxWidth : this.state.pxHeight,
        pctCurPos = 0,//left or top
        pctSizeDivider = 100 * pxDividerSize / pxTotalSize,//width or height
        pctSizeArea = 100 * (pxTotalSize - pxDividerSize * nDividers) / (nWorkAreas * pxTotalSize);//width or height

      console.log("RESIZE from orientation:", this.props.orientation);
      //var fnOnSplitterMoved = ;
      //fnOnSplitterMoved.orientation = this.props.orientation;
//debugger;
      // Finally modify children position
      var children = React.Children.map(this.props.children, function (child, i) {
        let pos = child.props.pos;
        pos.isHorizontal = orientation.isHorizontal;

        if (child.props.isDivider) {
          //debugger;
          console.log("RESIZE still from orientation:", this.props.orientation);
          child.props.fn.onMoved = this._onDividerMoved.bind(this);
          child.props.fn.parent = this;//Funcionará?????



window.debug_childs = window.debug_childs || {};
window.debug_childs[child.props.name] = child;

          if (orientation.isHorizontal) {
            pos.pctLeft = pctCurPos;
            pos.pctWidth = pctSizeDivider;
          } else {
            pos.pctTop = pctCurPos;
            pos.pctHeight = pctSizeDivider;
          }
          pctCurPos += pctSizeDivider;
        } else {
          if (orientation.isHorizontal) {
            pos.pctLeft = pctCurPos;
            pos.pctWidth = pctSizeArea;
          } else {
            pos.pctTop = pctCurPos;
            pos.pctHeight = pctSizeArea;
          }
          pctCurPos += pctSizeArea;
        }
        return child;
      }.bind(this));

      return children;
    }
    return [];
  }

  _onDividerMoved(delta) {
    console.log("[IdeWorkAreaContainer::_onDividerMoved] orientation:", this.props.orientation);

    this._onResizeChildren(delta);
  }

  //
  // First version: two work areas and one divider in the middle
  _onResizeChildren(delta) {
    if (this.state.pxWidth && this.state.pxHeight) {
      console.log("CHILDREN:", this.props.children);

      assert(() => {return this.props.children && this.props.children.length > 2;}, 'At least 3 children');
      assert(() => {return this.props.children[1].props.isDivider;}, 'odd indexed children are dividers');

      let splitter = this.props.children[1];

      //Horizontal displacement
      if (delta.x) {
        let curSplitX = (splitter.props.pos.pctLeft / 100) * this.state.pxWidth,
          newSplitX = curSplitX + delta.x,
          pxSplitWidth = 4;//TODO: PARAMETER OR FROM CSS

// console.log("splitter.props.pos.pctLeft:", splitter.props.pos);
// console.log("this.state.pxWidth:", this.state.pxWidth);
// console.log("curSplitX:", curSplitX);
// console.log("newSplitX:", newSplitX);

        //Limits
        if (newSplitX < 0) {
          newSplitX = 0;
        } else if (newSplitX > this.state.pxWidth - pxSplitWidth) {
          newSplitX = this.state.pxWidth - pxSplitWidth;
        }
//console.log("newSplitX:", newSplitX);
        //Propagate variation to the two neighbour areas
        let curSplitterPctX = splitter.props.pos.pctLeft,
         newSplitPctX = (newSplitX * 100) / this.state.pxWidth,
         pctVariation = newSplitPctX - curSplitterPctX;

  //      console.log("% variation:", pctVariation, curSplitterPctX, newSplitPctX);

        this.props.children[0].props.pos.pctWidth += pctVariation;
        this.props.children[2].props.pos.pctpctLeft += pctVariation;
        this.props.children[2].props.pos.pctWidth -= pctVariation;
      }

      //Vertical displacement
      if (delta.y) {

      }

    }
  }

  render() {
    let orientation = this._calcOrientation();

    return (
      <div ref={"container"} className="ide-workarea-container" data-orientation={orientation.isHorizontal ? '0':'1'}>
        {this._resizeChildren()}
      </div>
    );
  }
}

IdeWorkAreaContainer.propTypes = {};
IdeWorkAreaContainer.defaultProps = {};
export default IdeWorkAreaContainer;