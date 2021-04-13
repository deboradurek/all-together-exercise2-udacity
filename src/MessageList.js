import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages, user }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={`${message.username}-${index}`}
          className={message.username === user.username ? 'message sender' : 'message recipient'}
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default MessageList;
