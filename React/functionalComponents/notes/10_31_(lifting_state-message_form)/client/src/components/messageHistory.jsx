import React from 'react'

const MessageHistory = (props) => {
  return (
    <div>
        <h2>Message History</h2>
        {props.messageHistory.map((message, i) =>  {
            return(
                <ul key={i}>
                    <li>{message}</li>
                </ul>
            )})
    }
    </div>
  )
}

export default MessageHistory