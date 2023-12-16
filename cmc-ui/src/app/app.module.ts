import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MyListComponent } from "./modules/mylistmodule/components/mylist/mylist.component";
import { StoreModule } from '@ngrx/store'
import { MylistmoduleModule } from"./modules/mylistmodule/mylistmodule.module";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { TodoReducer, IAppState, INITIAL_STATE } from "./modules/mylistmodule/common/stores/store";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    MyListComponent
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      TodoReducer,
      INITIAL_STATE);
  }

}
