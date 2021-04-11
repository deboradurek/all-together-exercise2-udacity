import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  state = {
    textInput: '',
  };

  render() {
    const { textInput } = this.state;

    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            name="message"
            value={textInput}
          />
          <div className="input-group-append">
            <button className="btn submit-button">SEND</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;
