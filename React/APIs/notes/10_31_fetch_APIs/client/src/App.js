import './App.css';
import AxiosCrypto from './components/axiosCrypto';
import FetchAPI from './components/fetchAPI'


function App() {
  return (
    <div className="App">
      <div className='apis'>
        <FetchAPI />
      </div>
      <div className='apis'>
        <AxiosCrypto />
      </div>
    </div>
  );
}

export default App;
