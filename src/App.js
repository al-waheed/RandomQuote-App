import React, { Component } from 'react';
import Messages from './Messages'; 
import AddMessage from './AddMessage';

class App extends Component {

  state = {
    messages:[ 
      {id: 1, content:'We are most alive when we are in love'},
      {id: 2, content:'Never love anybody who treats ou like you are nobody'},
      {id: 3, content:'To love is nothing to be loved is something..to love and be loved is everything'},
      {id: 4, content:'love does not dominate, it cultivates'},
      {id: 5, content:'Within you i lose myself,without you i find myself wanting to become lost again'},
      {id: 6, content:'Every day and night,my mind is filled with thoughts of you.As long as the sun continues to shine,you can be sure that my heart will remain yours'},
      {id: 7, content:'Forever is a long time,but i wouldnot mind spending it by your side'}
    ]
  };

  addMessage = (newMessage) =>{
   const messages = [...this.state.messages,newMessage];
    this.setState({
      messages : messages
    })
  }

  randomMessages=(e)=>{
   const quote = Math.floor(Math.random() * this.state.messages.length)
    this.setState({
      [e.target.id]: e.target.value
    }) 
  }


render(){
  return (
  <div>
    <div id='name'></div>
     <Messages messages={this.randomMessages}/>
    <AddMessage addMessage={this.addMessages}/>
  </div>
  );
 }
}
export default App;
