import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <PersonCard id='1' lastName='Doe' firstName='Jane' age={45} hairCol='Black'/>
        <PersonCard id='2' lastName='Smith' firstName='John' age={88} hairCol='Brown'/>
        <PersonCard id='3' lastName='Fillmore' firstName='Millard' age={50} hairCol='Brown'/>
        <PersonCard lastName='Smith' firstName='Maria' age={62} hairCol='Brown'/>
      </div>
    </div>
  )
}

export default App

        