import React from 'react';
import ReactDom from 'react-dom';

import AppStatusBar from 'appRoot/views/appStatusBar';
import AppHeadBar from 'appRoot/views/appHeadBar';
import IdeWorkspace from 'appRoot/views/ideWorkspace';

import CSS from '../css/app.less';

//views

let AppLayout = React.createClass({
  componentDidMount: function () {
  },
  componentDidUpdate: function () {
  },
  render: function () {
    return (
      <div className="app-container">
        <IdeWorkspace />
        <AppStatusBar />
        <AppHeadBar />
      </div>
    );
  }
});



ReactDom.render(<AppLayout />, document.getElementById('app'));

