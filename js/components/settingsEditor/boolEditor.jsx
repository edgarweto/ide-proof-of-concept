import React from 'react';

class BoolEditor extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="bool-editor">
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input type="checkbox" checked={this.props.value ? 'checked' : ''} id={this.props.id} onChange={this.props.onBoolChanged} />
      </div>
    );
  }
}

export default BoolEditor;