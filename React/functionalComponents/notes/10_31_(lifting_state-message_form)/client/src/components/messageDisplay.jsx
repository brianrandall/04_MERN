import react, { useState } from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <h1>Most Recent Message</h1>
            <pre>{props.message}</pre>
        </>
    );
};

export default MessageDisplay;

