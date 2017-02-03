import React from 'react';
import ReactDom from 'react-dom';

import AppStatusBar from 'appRoot/views/appStatusBar';
import AppHeadBar from 'appRoot/views/appHeadBar';
import IdeWorkspace from 'appRoot/views/ideWorkspace';

import CSS from '../css/app.less';

//views

let AppLayout = React.createClass({
  componentDidMount: function () {
    console.log('componentDidMount', (new Date()).getTime());
  },
  componentDidUpdate: function () {
    console.log('componentDidUpdate', (new Date()).getTime());
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

