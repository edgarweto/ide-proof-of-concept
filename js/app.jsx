import React from 'react';
import ReactDom from 'react-dom';

import AppStatusBar from 'appRoot/views/appStatusBar';
import AppHeadBar from 'appRoot/views/appHeadBar';

import CSS from '../css/app.less';

//views

let AppLayout = React.createClass({
  render: function () {
    return (
      <div className="app-container">
        <main>
         
        </main>
        <AppStatusBar />
        <AppHeadBar>
          <li>File</li>
          <li>Edit</li>
        </AppHeadBar>
      </div>
    );
  }
});



ReactDom.render(<AppLayout />, document.getElementById('app'));

