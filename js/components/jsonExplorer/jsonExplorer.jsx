import React from 'react';
import JsonNode from 'appRoot/components/jsonExplorer/jsonNode';
import JsonValue from 'appRoot/components/jsonExplorer/jsonValue';

class JsonExplorer extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    let curObjLevel = this.props.example;

    let keys = Object.keys(curObjLevel);

    let nodes = keys.map((key) => {
      return (<JsonValue key={key} label={key} value={curObjLevel[key]} />)
    });

    console.log("KEYS:", keys);
    console.log("NODES:", nodes);

    return (
      <div className="json-explorer">
        <JsonNode nodes={nodes} key='root' name='root' object={curObjLevel} />
      </div>
    );
  }
}

JsonExplorer.defaultProps = {
  example: {
    myBool: true,
    myInt: 89,
    myFloat: 0.2378,
    myString: "eoeo"
    //myObj: {a: 1, b: 2, c: 3},
    //myArr: [0, 1, 2, 3]
   // more: this
  }
};

export default JsonExplorer;