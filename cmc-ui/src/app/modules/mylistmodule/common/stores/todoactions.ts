export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

export class TodoActions {
  constructor() {
    this.nextToDoId = 0;
  }

  public nextToDoId : Number;

  addTodo(text : string){
    return {
      type: ADD_TODO,
      //id: this.nextToDoId++,
      text: text,
      completed: false
    };
  };

  toggleTodo(id : string){
    return {
      type: TOGGLE_TODO,
      id: id
    };
  };

  removeTodo(id : string){
    return {
      type: REMOVE_TODO,
      id: id
    };
  }

  setCurrentFilter(filter : any){
    return {
      type: SET_CURRENT_FILTER,
      filter: filter
    };
  };
}
