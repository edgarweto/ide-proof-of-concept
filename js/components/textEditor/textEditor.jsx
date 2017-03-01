import React from 'react';


class TextEditor extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="text-editor">        
        <textarea placeholder="Remember, be nice!">
        </textarea>
      </div>
    );
  }
}

TextEditor.defaultProps = {};

export default TextEditor;