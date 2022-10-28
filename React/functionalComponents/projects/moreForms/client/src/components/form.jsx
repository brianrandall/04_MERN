import React from 'react'
import { useState } from 'react'
import '../App.css'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailLengthError, setEmailLengthError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passswordError, setPasswordError] = useState('')
    const [passwordMatchError, setPasswordMatchError] = useState('')

    const [userList, setUserList] = useState([])

    const firstNameVerification = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 1) {
            setFirstNameError('first name required')
        }
        else if (e.target.value.length <= 2) {
            setFirstNameError('name must be at least 2 characters')
        }
        else {
            setFirstNameError('')
        }
    }

    const lastNameVerification = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 1) {
            setLastNameError('last name required')
        }
        else if (e.target.value.length <= 2) {
            setLastNameError('last name must be at least 2 characters')
        }
        else {
            setLastNameError('')
        }
    }

    const emailVerification = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (e.target.value.length < 1) {
            setEmailLengthError('')
        }
        else if (e.target.value.length < 5) {
            setEmailLengthError('email must b at least 5 charx')
        }
        else {
            setEmailLengthError('')
        }
        if (e.target.value.length < 1) {
            setEmailError('email reqd')
        }
        else if (!e.target.value.match(emailRegex)) {
            setEmailError('email format is wrong u dumdum')
        }
        else {
            setEmailError ('')
        }
    }

    const passwordVerification = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 1) {
            setPasswordError('password required')
        } 
        else if (e.target.value.length < 6) { 
            setPasswordError('pwd must be 6 or more FOOL')
        }
        else {
            setPasswordError('')
        }
    }

    const passwordMatch = (e) => {
        setPasswordConfirm(e.target.value)
        if (password !== e.target.value) {
            setPasswordMatchError('passowrdjsdfs dont match')
        }
        else {
            setPasswordMatchError('')
        }

    }


    const submitHandler = (e) => {
        e.preventDefault()
        //this part takes the data from form
        let userObj = {firstName, lastName, email, password, passwordConfirm}

        setUserList([...userList, userObj])
    }
  
    return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>first name: </label>
                <input onChange={firstNameVerification} type='text'></input>
            </div>
            <div>
                {firstNameError ? <span>{firstNameError}</span>: ''}
            </div>
            <div className='form-group'>
                <label>last name: </label>
                <input onChange={lastNameVerification} type='text'></input>
            </div>
            <div>
                {lastNameError ? <span>{lastNameError}</span>: ''}
            </div>
            <div className='form-group'>
                <label>email: </label>
                <input onChange={emailVerification} type='text'></input>
            </div>
            <div>
                {emailLengthError ? <span>{emailLengthError}</span>: ''}
            </div>
            <div>
                {emailError ? <span>{emailError}</span>: ''}
            </div>
            <div className='form-group'>
                <label>password: </label>
                <input onChange={passwordVerification} type='text'></input>
            </div>
            <div>
                {passswordError ? <span>{passswordError}</span>: ''}
            </div>
            <div className='form-group'>
                <label>confirm password: </label>
                <input onChange={passwordMatch} type='text'></input>
            </div>
            <div>
                {passwordMatchError ? <span>{passwordMatchError}</span>: ''}
            </div>
            
        </form>
        <hr/>
    </div>
  )
}

export default Form