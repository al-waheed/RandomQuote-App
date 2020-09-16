import React, { Component } from 'react';
import './Quotes.css'


class Quotes extends Component {
   render(){
  const generateRandomColor = this.props.displayColor();
  const pageBackground = document.documentElement;
  pageBackground.style.color = generateRandomColor;
   
  return(
    <div className='quote-container' >
      <div className='main-container'>
      <div className='quote-box' key={Math.random()} style={{ backgroundColor: generateRandomColor}}>
          <h1 className="quote" style={{ color: "white" }}>"{this.props.quote}"</h1>
          <h5 className="author">-{this.props.author ? this.props.author : "Unknown"}-</h5>
      </div>
      <button style={{ backgroundColor: generateRandomColor }} className="newquote"onClick={this.props.handleClick}>
        New quote
      </button>
      </div>
    </div>
     )
   }
 }

export default Quotes;