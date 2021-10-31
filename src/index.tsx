import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as Redux from 'redux';
import { App } from './app/App';
import todosReducer from './todo/todoReducer';
import { Provider } from 'react-redux';

const store = Redux.createStore(todosReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

store.subscribe(render);
render();
