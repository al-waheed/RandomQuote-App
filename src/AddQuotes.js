import React, { Component } from 'react';

class AddQuotes extends Component {
    state = {
        quotes :''
      };

 handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
 }

 handleSubmit = (e) => {
  e.preventDefault();
//   this.props.addQuote(this.state);
  console.log(this.state);
   e.target.reset();
 }


    render(){
        return(
            <div className='addquote-container'>
                <div className='addquote-box'>
                 <form onSubmit={this.handleSubmit}>
                  <input type='text' id="quotes" onClick={this.handleChange}/>
                 <button > Add quote </button>
                 </form>
                 {/* <h1 className="quote">"{this.props.handleSubmit}"</h1> */}
            </div>
        </div>
        )
    }
}

export default AddQuotes;