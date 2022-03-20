import React, { useReducer } from 'react';
import { Todo } from './model';

type Actions =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'done'; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
      break;
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);
      break;
    case 'done':
      return state.map((todo) =>
        todo.id !== action.payload ? { ...todo, idDone: !todo } : todo,
      );
      break;
    default:
      return state;
      break;
  }
};

function ExampleReducer() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return <div>useReducer</div>;
}

export default ExampleReducer;
