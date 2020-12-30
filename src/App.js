import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './Char/Char';

class App extends Component {
  
  state = {
    text: '',
    textLength: 0
  }

  toggleCharacter = (ind) => {

    let charList = this.state.text.split('');
    charList.splice(ind, 1);
    const newText = charList.join('');
    const newTextLength = this.state.textLength - 1;
    this.setState({text: newText, textLength: newTextLength});

  }
  
  textChangeHandler = (event) => {

    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    })

    }

  render() {

    let characters = (
      <div>
        {this.state.text.split('').map((character, index) => {
          return <Char 
          character={character}
          clicked={() => this.toggleCharacter(index)}
          ></Char>
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>React Second Assignment</h1>
        <input type='text' onChange={this.textChangeHandler} value={this.state.text}></input>
        <p>This input text has a length of {this.state.textLength}</p>
        <Validation length={this.state.textLength}></Validation>
        {characters}
      </div>
    );
  }
}

export default App;
