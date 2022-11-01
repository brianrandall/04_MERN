import './App.css';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Etc from './components/etc'
import { useParams } from 'react-router'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/:input' element={<Etc />} />
        <Route path='/:input/:textColor/:bkColor' element={<Etc />} />
      </Routes>

    </div>
  );
}

export default App;
