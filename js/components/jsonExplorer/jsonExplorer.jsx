import React from 'react';
import JsonNode from 'appRoot/components/jsonExplorer/jsonNode';
import JsonValue from 'appRoot/components/jsonExplorer/jsonValue';

class JsonExplorer extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <ul className="json-explorer" data-active={this.props.active ? '1' : '0'}>
        <JsonNode key='root' label='root' object={this.props.data} />
      </ul>
    );
  }
}

JsonExplorer.defaultProps = {
  data: {},
  active: true
};

export default JsonExplorer;