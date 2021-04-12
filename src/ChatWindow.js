import React, { Component } from 'react';

class ChatWindow extends Component {
  state = {
    messages: [],
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="container">
        <h2>Super Awesome Chat</h2>
      </div>
    );
  }
}

export default ChatWindow;
