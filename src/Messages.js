import React from 'react';


const Messages = ({messages}) => {
    const messagesList = messages.map( message => {
       return(
           <div key={message.id}>
               <p>{message.content}</p>
            </div>
       )
    })
  return (
      <div>
        {messagesList}
      </div>
  )
}

export default Messages;