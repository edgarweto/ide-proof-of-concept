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
      <div className="json-explorer">
        <JsonNode key='root' label='root' object={this.props.data} />
      </div>
    );
  }
}

JsonExplorer.defaultProps = {
  data: {}
};

export default JsonExplorer;