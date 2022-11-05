import React from 'react'

const PersonList = (props) => {
  return (
    <div>
        {props.people.map((person, x) => {
             return <p key={x}>{person.firstName}, {person.lastName}</p>
        })}
    </div>
  )
}

export default PersonList