import React from 'react';
import IdeWorkAreaContainer from 'appRoot/components/ideWorkAreaContainer';
import IdeWorkArea from 'appRoot/components/ideWorkArea';
import IdeWorkAreaDivider from 'appRoot/components/ideWorkAreaDivider';

export default React.createClass({
  getInitialStatus: function () {
    return {
      enabled: true
    };
  },

  render: function () {
    return (
      <main className="ide-workspace">
        <IdeWorkAreaContainer orientation="horizontal">
          <IdeWorkArea name="main-bar" pos={{}} />
          <IdeWorkAreaDivider pos={{}} />
          <IdeWorkArea name="secondary-bar" pos={{}}>
            <IdeWorkAreaContainer orientation="vertical">
              <IdeWorkArea name="top-area" pos={{}} />
              <IdeWorkAreaDivider pos={{}} />
              <IdeWorkArea name="bottom-area" pos={{}} />
            </IdeWorkAreaContainer>
          </IdeWorkArea>
        </IdeWorkAreaContainer>
      </main>
    );
  }
});