import React from 'react';
import JsonValue from 'appRoot/components/jsonExplorer/jsonValue';

class JsonNode extends React.Component {

  constructor() {
    super();
    this.state = {};
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
      <div className="json-node">
        <div className="json-node-header" data-type={typeof this.props.object} >
          <span className="json-node-label">{this.props.label}:</span>
          <span className="json-node-label-detail">
            {isArray ? 'Array [' + this.props.object.length + ']' : 'Object'}
          </span>
        </div>
        <div className="json-node-body">
          {nodes}
        </div>
      </div>
    );
  }
}

export default JsonNode;