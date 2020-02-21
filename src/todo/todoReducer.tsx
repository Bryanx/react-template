import { TodoAction } from './todoAction';
import { Todo } from './todo';

let id = 0;

const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: id++,
        name: action.name,
        completed: action.completed,
      }];
    default:
      return state;
  }
};

export default todosReducer;
