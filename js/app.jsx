import React from 'react';
import ReactDom from 'react-dom';

import AppStatusBar from 'appRoot/views/appStatusBar';

import CSS from '../css/app.less';

//views

let AppLayout = React.createClass({
  render: function () {
    return (
      <div className="app-container">
        <main>
         
        </main>
        <AppStatusBar />
      </div>
    );
  }
});



ReactDom.render(<AppLayout />, document.getElementById('app'));

