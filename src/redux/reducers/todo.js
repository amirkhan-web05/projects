const initialState = {
  todo: [],
  value: '',
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO': {
      return {
        ...state,
        todo: action.payload,
      };
    }

    case 'ADD_TODO': {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }

    case 'REMOVE_TODO': {
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    }

    case 'CHECKED_TODO': {
      return {
        ...state,
        todo: state.todo.map((item) => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    }

    case 'VALUE_TODO': {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
};
