import * as React from 'react';
import './App.scss';
import { Todo } from '../todo/todo';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
const reactLogo = require('../assets/reactlogo.gif');

export const App = () => {
  let input: { value: string; };
  const todoNames = useSelector((todos: Todo[]) => todos.map((todo: Todo) => <li key={todo.id}>{todo.name}</li>));
  const dispatch = useDispatch();

  return (
    <div className="app">
      <img src={reactLogo} height="120" alt="" />
      <h1>Hello World!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) return;
          addTodo(dispatch, input.value);
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

const addTodo = (dispatch: Dispatch<any>, text: string) => {
  dispatch({
    type: 'ADD',
    name: text,
    completed: false,
  });
}