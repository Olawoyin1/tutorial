import React from 'react';


export default function Messages(){
    const [message, setMessage] = React.useState(["new", "second"])
    return(
        <div>
            {message.length > 0  ?
            <p>You have {message.length} unread {message.length == 1 ? "Message" : "Messages"}</p>:
            <p>No unread message</p>}
        </div>
    )
}