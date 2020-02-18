import { todosReducer } from "./todoReducer"
import { Todo } from "./Todo"

const deepFreeze = require('deep-freeze')

describe('test todosReducer', () => {

  it('should add a todo to the todoList', () => {
    const stateBefore: Todo[] = []
    const action = {
      type: "ADD",
      name: "Do dishes",
      completed: false
    };
    const stateAfter = [
      {
        id: 0,
        name: "Do dishes",
        completed: false
      }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      todosReducer(stateBefore, action)
    ).toStrictEqual(stateAfter)
  });

});