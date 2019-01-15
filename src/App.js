import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      quote: "Welcome to the Home of Random Quotes. Quote the quotes till you're quoted.",
      author: 'Oluwaseyi Suulola',
    }

this.handleClick = this.handleClick.bind(this)

  }
handleClick(event) {
  event.preventDefault();
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes').then( response => {
    return response.json()
  }).then(data => {
    return this.setState({
    quote: data[0].quote,
    author: data[0].character,
  })
 })
}

render() {   
    return (
      <div id='quote-box'>
      <div className='upper'>
        <blockquote id='text' className='blockquote'>{this.state.quote}</blockquote>
        <p id='author' className='blockquote-footer'>{this.state.author}</p>
     </div>

        <div className='lower'>        
        <button onClick={this.handleClick} id="new-quote">New Quote</button>
            
        <a href={`https://twitter.com/intent/tweet?text=${this.state.quote}`} target='_blank' rel="noopener noreferrer" data-size="large" data-show-count="false"> <button id="tweet-quote">Tweet</button> </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
            
      </div>
    );
  }
}

export default App;
