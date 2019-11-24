import React, { Component } from 'react';

// components
import Booklist from './components/BookList'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Mukul's Reading List</h1>
        <Booklist/>
      </div>
    );
  }
}

export default App;
