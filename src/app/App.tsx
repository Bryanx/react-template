import * as React from 'react';
import * as Redux from 'redux';
import './App.scss';
import { Todo } from '../todo/todo';
import { connect } from 'react-redux';
const reactLogo = require('../assets/reactlogo.gif');

const App = ({ addTodo, todoNames }) => {
  let input: { value: string; };

  return (
    <div className="app">
      <img src={reactLogo.default} height="120" alt="" />
      <h1>Hello World!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <ul>
        {todoNames}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ todos }) => ({
  todoNames: todos.map((todo: Todo) => <li key={todo.id}>{todo.name}</li>),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  addTodo: (text: string) => {
    dispatch({
      type: 'ADD',
      name: text,
      completed: false,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
