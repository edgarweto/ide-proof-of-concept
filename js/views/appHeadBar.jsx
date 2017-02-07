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
        <a href="" title="">LL</a>

        <Menu menuType="app-nav-h app-head-bar-menu">
          <MenuItem cmdCaption="File" menuType="app-nav-v">
            <MenuItem cmdCaption="Open" />
            <MenuItem cmdCaption="Save" />
            <MenuItem isDivider={true} />
            <MenuItem cmdCaption="Exit"/>
          </MenuItem>

          <MenuItem cmdCaption="Edit" menuType="app-nav-v">
            <MenuItem cmdCaption="Undo" />
            <MenuItem cmdCaption="Redo" />
          </MenuItem>
        </Menu>
        
        <Menu menuType="app-head-bar-menu main-user-menu app-nav-h">
          <MenuItem cmdCaption="Login" />
          <MenuItem cmdCaption="Register" />
        </Menu>
      </div>
    );
  }
});