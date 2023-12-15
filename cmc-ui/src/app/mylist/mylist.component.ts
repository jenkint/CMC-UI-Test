import {Component, Inject, OnDestroy} from '@angular/core';

@Component({
  selector: 'mylist-component',
  templateUrl: './mylist.component.html',
  standalone: true
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
  }

  public ngOnDestroy()
  {
    //remove listener
    //this.unsubscribe();
  }
}
