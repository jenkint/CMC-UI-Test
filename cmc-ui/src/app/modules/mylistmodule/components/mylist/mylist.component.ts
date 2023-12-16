import {Component, Inject, OnDestroy} from '@angular/core';
import { ToDoItem } from '../../common/models/todoitem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mylist-component',
  templateUrl: './mylist.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class MyListComponent implements OnDestroy {
  constructor(
    //@Inject('AppStore') private appStore: AppStore
  ){
    // this.unsubscribe = this.appStore.subscribe(()=> {
    //   let state = this.appStore.getState();
    //   this.currentFilter = state.currentFilter;
    //   this.todos = state.todos;
    //});

    this.todos.push(new ToDoItem('1', 'Test1'));
    this.todos.push(new ToDoItem('2', 'Test2'));
    this.todos.push(new ToDoItem('3', 'Test3'));
    this.todos.push(new ToDoItem('4', 'Test4'));
    this.todos.push(new ToDoItem('5', 'Test5'));
  }

  public todos : ToDoItem[] = [];

  public ngOnDestroy()
  {
    //remove listener
    //this.unsubscribe();
  }
}
