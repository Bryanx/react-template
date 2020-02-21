import * as React from 'react';
import * as Redux from 'redux';
import './App.scss';
import { Todo } from '../todo/todo';
import { connect } from 'react-redux';
const reactLogo = require('../assets/reactlogo.gif');

const App = ({ onClick, todoNames }) => {
  return (
    <div className="app">
      <img src={reactLogo.default} height="120" alt="" />
      <h1>Hello World!</h1>
      <button onClick={onClick}>ADD TODO</button>
      <ul>
        {todoNames}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: { todos: Todo[]; }) => ({
  todoNames: state.todos.map((todo: Todo) => <li key={todo.id}>{todo.name}</li>),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  onClick: () => {
    dispatch({
      type: 'ADD',
      name: 'Do dishes',
      completed: false,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
