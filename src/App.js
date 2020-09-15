import React, { Component } from 'react';
import Quotes from './Quotes'; 
import AddQuotes from './AddQuotes';
import quotes from './MessageDatabase';

class App extends Component {

  state = {
    quote:quotes[0].quote,
    author:quotes[0].author
  };

  addQuote = (addQuote) =>{
   const newQuote = [...this.state.quote,addQuote];
    this.setState({
      quote  : newQuote
    })
  }

  randomQuote=(e)=>{
   const randomNum = Math.floor(Math.random() * quotes.length)
    return quotes[randomNum];
  }

  reorderQuotes(arr){
    return arr.sort(()=>Math.random()-0.5)
  }
   
  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.reorderQuotes(quotes)
  };

  generateRandomColor() {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)}
      )`;
    return randomColor;
  }

     render(){
        return (
          <div>
            <Quotes
               displayColor={this.generateRandomColor}
               handleClick={this.handleClick}{...this.state}/>

            <AddQuotes addQuote={this.addQuote}/>
           </div>
       );
    }
}
export default App;
