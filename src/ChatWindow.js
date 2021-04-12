import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatWindow extends Component {
  state = {
    messages: [],
  };

  handleSendMessage = (username) => (text) => {
    this.setState((currentState) => ({
      messages: [...currentState.messages, { username, text }],
    }));
  };

  render() {
    const users = [{ username: 'Amy' }, { username: 'John' }];
    const { messages } = this.state;

    return (
      <div className="container">
        {users.map((user) => (
          <div key={`chat-window-${user.username}`} className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <MessageList messages={messages} user={user} />

            <SendMessage onSendMessage={this.handleSendMessage(user.username)} />
          </div>
        ))}
      </div>
    );
  }
}

export default ChatWindow;
