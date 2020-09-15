import React, { Component } from 'react';


class Quotes extends Component {
   render(){
  const generateRandomColor = this.props.displayColor();
  const pageBackground = document.documentElement;
  pageBackground.style.backgroundColor = generateRandomColor;
   
  return(
    <div className='quote-container'>
      <div className='quote-box' key={Math.random()} style={{ color: generateRandomColor }}>
          <h1 className="quote">"{this.props.quote}"</h1>
          <h5 className="author">-{this.props.author ? this.props.author : "Unknown"}-</h5>
      </div>
      <button style={{ backgroundColor: generateRandomColor }} className="newquote"onClick={this.props.handleClick}>
        New quote
      </button>
    </div>
     )
   }
 }

export default Quotes;