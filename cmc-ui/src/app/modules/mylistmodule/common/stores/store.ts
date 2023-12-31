import { ToDoItem } from '../models/todoitem';

export interface IAppState {
  items: ToDoItem[];
  currentFilter: string
}

export const INITIAL_STATE: IAppState = {
  items: [],
  currentFilter: 'SHOW_ALL'
};


export function TodoReducer(state = INITIAL_STATE, action : any){
  switch (action.type) {
    // case TodoActions.ADD_TODO:
    //   return {
    //     todos: state.todos.concat({
    //       id: action.id,
    //       text: action.text,
    //       completed: action.completed
    //     }),
    //     currentFilter: state.currentFilter
    //   };
    // case TodoActions.TOGGLE_TODO:
    //   return {
    //     todos: toggleTodo(state.todos, action),
    //     currentFilter: state.currentFilter
    //   };
    // case TodoActions.REMOVE_TODO:
    //   return {
    //     todos: state.todos.filter(todo => todo.id != action.id),
    //     currentFilter: state.currentFilter
    //   };
    // case TodoActions.SET_CURRENT_FILTER:
    //   return {
    //     todos: state.todos.map(todo => todo),
    //     currentFilter: action.filter
    //   };
    default:
      return state;
  }
};

// function toggleTodo(todos, action){
//   //map returns new array
//   return todos.map(todo => {
//     //skip other items
//     if (todo.id !== action.id)
//       return todo;
//     //toggle
//     return {
//       id: todo.id,
//       text: todo.text,
//       completed: !todo.completed
//     };
//   });
}
