import React from 'react';
import Menu from 'appRoot/components/menu';
import MenuItem from 'appRoot/components/menuItem';

export default React.createClass({
  getInitialState: function () {
    return {
    };
  },

  render: function () {
    return (
      <div className="app-head-bar">
        <a href="" title="">L</a>
        <Menu menuType="app-head-bar-menu">
          <MenuItem cmdCaption="File" />
          <MenuItem cmdCaption="Edit" />
        </Menu>
        
        <Menu menuType="app-head-bar-menu main-user-menu">
          <MenuItem cmdCaption="Login" />
          <MenuItem cmdCaption="Register" />
        </Menu>
      </div>
    );
  }
});