import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charCount: 0,
      
    };
  }
  handleChange = (event) => {
    this.setState({charCount: event.target.value.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} />
        <h3>Remaining Chars: {this.props.maxChars - this.state.charCount}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
