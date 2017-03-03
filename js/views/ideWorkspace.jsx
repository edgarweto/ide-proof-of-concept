import React from 'react';
import IdeWorkAreaContainer from 'appRoot/components/ideWorkAreaContainer';
import IdeWorkArea from 'appRoot/components/ideWorkArea';
import IdeWorkAreaSplitter from 'appRoot/components/ideWorkAreaSplitter';
import IdePaneContainer from 'appRoot/components/tabPane/idePaneContainer';
import JsonExplorer from 'appRoot/components/jsonExplorer/jsonExplorer';
import TextEditor from 'appRoot/components/textEditor/textEditor';
import SettingsEditor from 'appRoot/components/settingsEditor/settingsEditor';

import assert from 'appRoot/utils/assert';

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


    let layoutSettings = {
      statusBarEnabled: true
    };

    let layoutSettingsMeta = {
      statusBarEnabled: {
        title: 'StatusBar',
        type: 'bool',
        enabled: false
      }
    };

    function registerSetting(settingDescriptor) {
      assert(() => {return settingDescriptor.name && settingDescriptor.meta ? true : false;});
      assert(() => {return layoutSettings[settingDescriptor.name] === undefined;});
      assert(() => {return layoutSettingsMeta[settingDescriptor.name] === undefined;});
      
      layoutSettings[settingDescriptor.name] = settingDescriptor.value;

      layoutSettingsMeta[settingDescriptor.name] = settingDescriptor.meta;
    }

    registerSetting({
      name: 'host',
      value: 'http://localhost:8080/',
      meta: {
        title: 'Host',
        type: 'string',
        enabled: false
      }
    });
    registerSetting({
      name: 'colorScheme',
      value: 'Black & White',
      meta: {
        title: 'Color scheme',
        type: 'array',
        enabled: true,
        values: ['Black & White', 'Greens', 'Browns']
      }
    });

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
              <IdeWorkArea name="bottom-area" pos={{}}>
                <SettingsEditor name="" title="Layout" settings={layoutSettings} settingsMeta={layoutSettingsMeta} />
              </IdeWorkArea>
            </IdeWorkAreaContainer>
          </IdeWorkArea>
        </IdeWorkAreaContainer>
      </main>
    );
  }

  
});