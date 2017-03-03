import React from 'react';

class SettingsEditor extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {

    let values = this.props.settings,
      metas = this.props.settingsMeta;

    let nodes = [];
    for (let key in values) {
      if (metas[key]) {
        let value = values[key];

        if (typeof value === 'boolean') {
          value = value ? 'true' : 'false';
        }

        let node = (
          <li key={key} className="settings-value-editor">
            <span className="item-title">{metas[key].title}:</span>
            <span className="item-value">{value}</span>
          </li>
        );
        nodes.push(node);
      }
    }


    return (
      <div className="settings-editor">
        <div className="settings-title">{this.props.title}</div>
        <div className="settings-body">
          <ul>
            {nodes}
          </ul>
        </div>
      </div>
    );
  }
}

SettingsEditor.defaultProps = {};

export default SettingsEditor;