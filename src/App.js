import React, { Component } from 'react'


import './App.css'
import Main from './Main'
import Footer from './Footer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      tempName: {
        'info-1': {
          id: 'info-1',
          title: 'JOHN CENA',
          body: 'Here is some stuff'
        },
        'info-2': {
          id: 'info-2',
          title: 'Chris Burke',
          body: 'I am awesome',
        },
      },
    }

  }

  
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
