import './App.css';
import Main from './views/main'
import Product from './views/productPage'
import { Link, Routes, Route } from 'react-router-dom'
import Update from './views/editProduct'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/:id' element={ <Product /> } />
        <Route path='/edit/:id' element={ <Update /> } />
      </Routes>
    </div>
  );
}

export default App;
