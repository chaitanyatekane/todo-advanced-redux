import { initialState } from "./initial-state";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
  TOGGLE_ONGOING,
} from "./actions";

import shortid from "shortid";

function saveStateToBrowser(state) {
  // JSON object into String
  window.localStorage.setItem("my-todos", JSON.stringify(state));
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;

      const newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title,
            current: true,
            ongoing: false,
            completed: false,
            important: false,
          },
        ],
      };

      saveStateToBrowser(newState);
      return newState;
    }

    case TOGGLE_ONGOING: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.current = false;
          todo.ongoing = true;
          todo.completed = false;
        }
        return todo;
      });

      const newState = {
        ...state,
        todos: newTodos,
      };

      saveStateToBrowser(newState);
      return newState;
    }

    case TOGGLE_COMPLETED: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.current = false;
          todo.ongoing = false;
          todo.completed = true;
        }
        return todo;
      });

      const newState = {
        ...state,
        todos: newTodos,
      };

      saveStateToBrowser(newState);
      return newState;
    }

    case TOGGLE_IMPORTANT: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.important = !todo.important;
        }
        return todo;
      });

      const newState = {
        ...state,
        todos: newTodos,
      };

      saveStateToBrowser(newState);
      return newState;
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== id);

      const newState = {
        ...state,
        todos: newTodos,
      };

      saveStateToBrowser(newState);
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
