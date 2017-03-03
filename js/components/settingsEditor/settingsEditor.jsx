import React from 'react';
import BoolEditor from 'appRoot/components/settingsEditor/boolEditor';

class SettingsEditor extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {



    return (
      <div className="settings-editor">
        <div className="settings-title">{this.props.title}</div>
        <div className="settings-body">
          <ul>
            {this._renderChildren()}
          </ul>
        </div>
      </div>
    );
  }

  _renderChildren() {
    let values = this.props.settings,
      metas = this.props.settingsMeta;

    let nodes = [];
    for (let key in values) {
      if (metas[key]) {
        let value = values[key],
          node = null;

        if (typeof value === 'boolean') {
          node = (
            <li key={key} className="settings-value-editor">
              <BoolEditor title={metas[key].title} value={value} id={key + '-editor'} onBoolChanged={this._onBoolChanged.bind(this)} />
            </li>
          );
        } else {
          node = (
            <li key={key} className="settings-value-editor">
              <span className="item-title">{metas[key].title}:</span>
              <span className="item-value">{value}</span>
            </li>
          );
        }

        nodes.push(node);
      }
    }
    return nodes;    
  }

  _onBoolChanged(ev) {
    console.log("OnBoolChanged", ev);
  }
}

SettingsEditor.defaultProps = {};

export default SettingsEditor;