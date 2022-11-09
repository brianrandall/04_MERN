import { Link, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Players from './components/playerList';
import AddPlayer from './components/addPlayer';
import Games from './components/gameTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Players /> } />
        <Route path="/players/list" element={ <Players /> } />
        <Route path="/players/add_player" element={ <AddPlayer /> } />
        <Route path='/status/game/:num' element={ <Games /> } />
      </Routes>
    </div>
  );
}

export default App;
