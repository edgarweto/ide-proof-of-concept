import React from 'react';

class JsonValue extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    let valueType = typeof this.props.value,
      value = this.props.value;

    switch (valueType) {
      case 'boolean':
        value = value ? 'true' : 'false';
        break;
      case 'number':
        break;
      case 'string':
        value = "\"" + value + "\"";
        break;
    }

    return (
      <div className="json-value" data-type={valueType}>
        <span className="label">{this.props.label}:</span>
        <span className="value">{value}</span>
      </div>
    );
  }
}

export default JsonValue;