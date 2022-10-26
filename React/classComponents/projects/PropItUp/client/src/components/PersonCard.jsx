// import React, {Component} from 'react'

// class PersonCard  extends Component {
//     render () {
//         return (
//             <div>
//                 <h2>
//                     {this.props.lastName}, {this.props.firstName}
//                 </h2>
//                 <p>
//                     Age: {this.props.age}
//                 </p>
//                 <p>
//                     Hair Color: {this.props.hairCol}
//                 </p>
//             </div>
//         )
//     }
// }

// const Person = new PersonCard ('Doe, Jane', 45, 'Black')

// export default PersonCard

import React from 'react'

const PersonCard = (props) => {
  return (
    <div> 
        <h2>
            {props.lastName}, {props.firstName}
        </h2> 
        <p>
            Age: {props.age}
        </p>
        <p>
            Hair Color: {props.hairCol}
        </p>
    </div>
  )
}

export default PersonCard