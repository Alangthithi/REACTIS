import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';
import TodoItem from './Components/TodoItem'

class App extends Component {
  constructor() {
    super();
    this.todoItem = [
      { title: 'Học Anh Văn', isComplete: true },
      { title: 'Học PHP', isComplete: false },
      { title: 'Học React' }
    ];
  }

  render() {
    return (
      <div className="App">
        {this.todoItem.map((item, index) => <TodoItem key={index} item={item} />)}
      </div>
    );
  }
}

export default App;
