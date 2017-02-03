import React from 'react';

export default React.createClass({
  getInitialStatus: function () {
    return {
      enabled: true
    };
  },

  render: function () {
    return (
      <main className="ide-workspace">
      </main>
    );
  }
});