import App from "./app/App";
import * as ReactDOM from "react-dom";
import * as React from "react";
import * as Redux from "redux";
import { todosReducer } from "./todo/todoReducer"

const store = Redux.createStore(Redux.combineReducers({ todos: todosReducer }));

const render = () => {
    ReactDOM.render(
        <App
            todos={store.getState().todos}
            addTodo={() => store.dispatch({
                type: "ADD",
                name: "Do dishes",
                completed: false
            })}
        />,
        document.getElementById("root")
    );
}

store.subscribe(render);
render();