import React from 'react'
import { Component } from 'react';


class PersonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age:this.props.age 
    }
  }
  render() {
    return (
      <div className={`user-${this.props.id}`}>
      <h2>
        {this.props.lastName}, {this.props.firstName}
      </h2>
      <p>
        Age: {this.state.age}
      </p>
      <p>
        Hair Color: {this.props.hairCol}
      </p>
      <div className='clicker'>

        <button onClick={()=> this.setState ({age: this.state.age + 1})} >
          birthday button for {this.props.firstName} {this.props.lastName}
        </button>
      </div>
    </div>
    )
  }
}

export default PersonCard