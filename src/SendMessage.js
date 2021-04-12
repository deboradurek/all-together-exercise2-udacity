import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  };

  state = {
    textInput: '',
  };

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState({
      textInput: value,
    });
  };

  isDisabled = () => {
    const { textInput } = this.state;
    return textInput === '';
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
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;
