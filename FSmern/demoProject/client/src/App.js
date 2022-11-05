import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/personDetail';
import Message from './views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Message />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
      </Routes>
      
      
    </div>
  );
}

export default App;
