import React, { Component } from 'react';

class AddMessage extends Component {
 state = {
     id: null,
     content: null
 }

 handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
 }

 handleSubmit = (e) => {
  e.preventDefault();
  this.props.AddMessage(this.state);
   e.target.reset();
 }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='content' required placeholder='Add new quote' onChange={this.handleChange}/>
                      <button>ADD+</button>
                </form>
            </div>
        )
    }
}

export default AddMessage;