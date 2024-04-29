import React from 'react';
import './App.css';
import SpeechRecognitionComponent from './SpeechRecognitionComponent';
import FileManager from './FileManager';

function App() {
  return (
    <div className="App">
      <h1>Speech to Excel</h1>
      <FileManager />
      <SpeechRecognitionComponent />
    </div>
  );
}

export default App;
