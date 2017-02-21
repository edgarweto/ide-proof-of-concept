import React from 'react';

class JsonNode extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="json-node">
        {this.props.nodes}
      </div>
    );
  }
}

export default JsonNode;