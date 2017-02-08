import React from 'react';
import IdeWorkAreaContainer from 'appRoot/components/ideWorkAreaContainer';
import IdeWorkArea from 'appRoot/components/ideWorkArea';

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
          <IdeWorkArea name="main-bar" />
          <IdeWorkArea isDivider={true} />
          <IdeWorkArea name="secondary-bar" />
        </IdeWorkAreaContainer>
      </main>
    );
  }
});