import React, { Component } from 'react';


class Quotes extends Component {
   render(){
  const generateRandomColor = this.props.displayColor();
  const quoteBackground = document.documentElement;
  quoteBackground.style.color = generateRandomColor;
   
  return(
    <div className='container' >
      <div className='quote-container'>
      <div className='quote-box' key={Math.random()} style={{ backgroundColor: generateRandomColor}}>
          <h1 className="quote" style={{ color: "white" }}>{this.props.quote}</h1>
          <h5 className="author">{this.props.author ? this.props.author : "Unknown"}</h5>
      </div>
       <div className='cta'>
       <button style={{ backgroundColor: generateRandomColor }} className="newquote" onClick={this.props.handleClick}>
        Newquote
       </button>
      </div>
     </div>
    </div>
     )
   }
 }

export default Quotes;