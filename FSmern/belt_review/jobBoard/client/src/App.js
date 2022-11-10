import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './views/main'
import Header from './components/header';
import EditJob from "./views/editJob";
import NewJob from "./views/newJob";
import ViewJob from "./views/viewJob";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobs/edit/:id" element={<EditJob />} />
        <Route path="/jobs/new" element={<NewJob />} />
        <Route path="/jobs/view/:id" element={<ViewJob />} />
      </Routes>
    </div>
  );
}

export default App;
