import React, { Component } from 'react';
import axios from 'axios';
import SpeechRecognitionComponent from './SpeechRecognitionComponent';

class FileManager extends Component {
  handleSaveToExcel = (transcript) => {
    axios.post('/save-speech', { transcript })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error saving to Excel:', error);
      });
  };

  render() {
    return (
      <div>
        <SpeechRecognitionComponent onSaveToExcel={this.handleSaveToExcel} />
      </div>
    );
  }
}

export default FileManager;
