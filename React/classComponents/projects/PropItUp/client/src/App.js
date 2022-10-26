// import './App.css';
// import PersonCard from './components/PersonCard'

// function App() {
//   return (
//     <div className="App">
//       <PersonCard lastName={'Doe'} firstName={'Jane'} age={'45'} hairCol={'Black'}/>
//       <PersonCard lastName={'Smith'} firstName={'John'} age={'88'} hairCol={'Brown'}/>
//       <PersonCard lastName={'Fillmore'} firstName={'Millard'} age={'50'} hairCol={'Brown'}/>
//       <PersonCard lastName={'Smith'} firstName={'Maria'} age={'62'} hairCol={'Brown'}/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="App">
      <PersonCard lastName='Doe' firstName='Jane' age='45' hairCol='Black'/>
      <PersonCard lastName='Smith' firstName='John' age='88' hairCol='Brown'/>
      <PersonCard lastName='Fillmore' firstName='Millard' age='50' hairCol='Brown'/>
      <PersonCard lastName='Smith' firstName='Maria' age='62' hairCol='Brown'/>
      
    </div>
  );
}

export default App;