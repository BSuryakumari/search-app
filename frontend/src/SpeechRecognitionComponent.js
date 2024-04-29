import React, { Component } from 'react';

class SpeechRecognitionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { transcript: '' };
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.continuous = true; // Continue capturing
    this.recognition.interimResults = true; // Show interim results
  }

  componentDidMount() {
    this.recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.setState({ transcript });
    };
  }

  handleStart = () => {
    this.recognition.start();
  };

  handleStop = () => {
    this.recognition.stop();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <p>{this.state.transcript}</p>
      </div>
    );
  }
}

export default SpeechRecognitionComponent;
