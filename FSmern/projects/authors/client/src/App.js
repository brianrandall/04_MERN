import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './views/Main'
import AuthorCreate from "./views/createAuthor";
import AuthorEdit from './views/editAuthor'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={  <Main /> } />
        <Route path='new' element={  <AuthorCreate /> } />
        <Route path='/edit/:id' element={  <AuthorEdit /> } />

      </Routes>
    </div>
  );
}

export default App;
