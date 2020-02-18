import { TodoAction } from "./todoAction";
import { Todo } from "./todo";

var id = 0;

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: id++,
                name: action.name,
                completed: action.completed
            }];
        default:
            return state;
    }
};