import React, {Component} from 'react';

export default class App extends Component {

    handleClick(){
      alert('i am clicked!');
      console.log('i am clicked!');
    }

  render(){
    return (
      <button
      onClick={()=> this.handleClick()}
      >
      Click Me!
      </button>
    )
  }
}