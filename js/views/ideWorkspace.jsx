import React from 'react';
import IdeWorkAreaContainer from 'appRoot/components/ideWorkAreaContainer';
import IdeWorkArea from 'appRoot/components/ideWorkArea';
import IdeWorkAreaSplitter from 'appRoot/components/ideWorkAreaSplitter';
import IdePaneContainer from 'appRoot/components/tabPane/idePaneContainer';
import JsonExplorer from 'appRoot/components/jsonExplorer/jsonExplorer';
import TextEditor from 'appRoot/components/textEditor/textEditor';

export default React.createClass({
  getInitialStatus: function () {
    return {
      enabled: true
    };
  },

  render: function () {

    let data = {
      myBool: true,
      myInt: 89,
      myFloat: 0.2378,
      myString: "eoeo",
      myObj: {a: 1, b: 2, c: 3},
      myArr: [0, 1, 2, 3],
      nested: {
        myBool2: true,
        myInt2: 89,
        myString2: "eoeo",
        myObj2: {a: 1, b: {x: 0, y: 1}, c: 3},
      }

     // more: this
    };

    let samples = {
      a: [0,2345,22,6,4,3,4,3,32,2],
      b: [3,3,4,4,5,6,6,7,8,5,54,3,54,6,7,4]
    };


    return (
      <main className="ide-workspace">
        <IdeWorkAreaContainer orientation="horizontal">
          <IdeWorkArea name="main-bar" pos={{}}>
            <IdePaneContainer name="main-tabs">
              <JsonExplorer name="Explorer" data={data} />
              <JsonExplorer name="Samples" data={samples} />
            </IdePaneContainer>
          </IdeWorkArea>
          <IdeWorkAreaSplitter name="divider-1" pos={{}} />
          <IdeWorkArea name="secondary-bar" pos={{}}>
            <IdeWorkAreaContainer orientation="vertical">
              <IdeWorkArea name="top-area" pos={{}}>
                <IdePaneContainer name="main-views">
                  <TextEditor name="unnamed" />
                </IdePaneContainer>
              </IdeWorkArea>
              <IdeWorkAreaSplitter name="divider-2" pos={{}} />
              <IdeWorkArea name="bottom-area" pos={{}} />
            </IdeWorkAreaContainer>
          </IdeWorkArea>
        </IdeWorkAreaContainer>
      </main>
    );
  }

  
});