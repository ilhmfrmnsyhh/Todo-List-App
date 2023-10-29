const initialState = {
  todos: [],
  completed: [],
  inprogress: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((x) => x.id !== action.id),
      };
    case "ADD_INPROGRESS":
      return {
        ...state,
        inprogress: [...state.inprogress, action.data],
      };
    case "ADD_COMPLETED":
      return {
        ...state,
        completed: [...state.completed, action.data],
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        completed: state.completed.filter((x) => x.id !== action.id),
      };
    case "REMOVE_INPROGRESS":
      return {
        ...state,
        inprogress: state.inprogress.filter((x) => x.id !== action.id),
      };
    case "UPDATE_TODO":
      const id = action.data.id
      const data = action.data

      console.log(data)
      if (action.type === "INPROGRESS") {
        const updatedInprogress = state.inprogresss.map((inprogress) =>
          inprogress.id === id ? { ...inprogress, ...data } : inprogress
        );
        return { ...state, inprogresss: updatedInprogress };
      } else {
        const updatedTodo = state.todos.map((todo) =>
          todo.id === id ? { ...todo, ...data } : todo
        );
        return { ...state, todos: updatedTodo };
      }      
    default:
      return state;
  }
};

export default rootReducer;
