import React, { useState } from 'react';
import './App.css';
import MessageForm from './components/messageForm';
import MessageDisplay from './components/messageDisplay';
import MessageHistory from './components/messageHistory';

function App() {
  const [currentMsg, setCurrentMsg] = useState('there are no current messages')
  const [messageHistory, setMessageHistory] = useState([])
  
  const youveGotMail = (newMsg) => {
    setCurrentMsg(newMsg);
    setMessageHistory([...messageHistory, newMsg]);
  };
  return (
    <div className="App">
      <MessageForm onNewMessage = {youveGotMail}/>
      <MessageDisplay message={currentMsg}/>
      <hr/>
      <MessageHistory messageHistory={messageHistory}/>
    </div>
  );
}

export default App;
