import React from 'react'
import { useState } from 'react'

const lightMode = {
    backgroundColor: "White",
    color: "black",
    padding: "10px"
}

const darkMode = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px'
}

const Form = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')

    const [light, setLight] = useState(true)
    const switchLight = () => setLight(!light)

    const [petlist, setPetList] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form submitted: ', name, type, age, image)
        //this part takes the data from form
        let petObj = {name, type, age, image}

        setPetList([...petlist, petObj])
    }
  
    return (
    <div>
        <h1>
            plz fill out the pet form to be seen by the vet 
        </h1>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>pet name: </label>
                <input onChange={(e) => setName(e.target.value)} type='text'></input>
            </div>
            <div className='form-group'>
                <label>pet type: </label>
                <input onChange={(e) => setType(e.target.value)} type='text'></input>
            </div>
            <div className='form-group'>
                <label>pet age: </label>
                <input onChange={(e) => setAge(e.target.value)} type='number'></input>
            </div>
            <div className='form-group'>
                <label>pet image: </label>
                <input onChange={(e) => setImage(e.target.value)} type='text'></input>
            </div>
            <div className='formgroup'>
                <button value='add pet'>submit</button>
            </div>
        </form>
        <hr/>

        <div className='petList'>
            {
                petlist.map((x, idx) => {
                    return (
                        <div key={idx} style={light ? lightMode : darkMode}>
                            <strong>
                                <p>
                                    name: {x.name}
                                </p>
                                <p>
                                    type: {x.type}
                                </p>
                                <p>
                                    age: {x.age}
                                </p>
                                <p>
                                    <img src={x.image} alt='pet' height='200px'/>
                                </p>
                                <button onClick={switchLight}>{light ? 'switch to dark mode' : 'switch to light mode'}</button>
                            </strong>
                        </div>    
                    )
                })
            }
        </div>
    </div>
  )
}

export default Form