import React from 'react'
import { useParams } from 'react-router'


const Etc = () => {
    const {input, textColor, bkColor} = useParams('')
  return (
    <div style={{backgroundColor:bkColor, color:textColor, height:'444px'}}>
        <p>
          {
          isNaN(input) ? `the word is ${input}` : `the number is ${input}`
          }
          
        </p>

    </div>
  )
}

export default Etc