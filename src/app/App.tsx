import * as React from 'react';
import './App.scss';
import { Todo } from '../todo/todo';
const reactLogo = require('../assets/reactlogo.gif');

interface AppProps {
  todos: Todo[]
  addTodo: () => void
}

class App extends React.Component<AppProps> {
  todos = this.props.todos

  handleClick = () => this.props.addTodo()

  public render() {
    return (
      <div className="app">
        <img src={reactLogo.default} height="120" alt="" />
        <h1>Hello World!</h1>
        <button onClick={this.handleClick}>ADD TODO</button>
        <ul>
          {this.props.todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
