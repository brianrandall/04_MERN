import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Search from './components/search'
import SWapi from './components/SWapi'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:api/:id/' element={ 
          <div>
            <Search />
            <SWapi />
          </div>
          } />

      </Routes>
    </div>
  );
}

export default App;
