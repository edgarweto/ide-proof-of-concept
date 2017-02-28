import React from 'react';
import JsonValue from 'appRoot/components/jsonExplorer/jsonValue';

class JsonNode extends React.Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    let curObjLevel = this.props.object,
      keys = Object.keys(curObjLevel),
      isArray = Array.isArray(curObjLevel);

    // Generate children nodes (more nodes and/or values)
    let nodes = keys.map((key) => {
      let value = curObjLevel[key];

      if (Array.isArray(value) || typeof value === 'object') {
        return (<JsonNode key={key} label={key} object={curObjLevel[key]}/>)
      } else {
        return (<JsonValue key={key} label={key} value={curObjLevel[key]} />)
      }
    });

    return (
      <li className="json-node" data-expanded={this.state.expanded ? '1' : '0'}>
        <div className="json-node-header" data-type={typeof this.props.object} onClick={this._handleClick.bind(this)}>
          <span className="json-node-label" data-expanded={this.state.expanded ? '1' : '0'}>{this.props.label}:</span>
          <span className="json-node-label-detail">
            {isArray ? 'Array [' + this.props.object.length + ']' : 'Object'}
          </span>
        </div>
        <ul className="json-node-body">
          {nodes}
        </ul>
      </li>
    );
  }

  _handleClick(ev) {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}

export default JsonNode;