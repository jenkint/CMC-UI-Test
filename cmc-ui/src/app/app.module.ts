import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MyListComponent } from "./mylist/mylist.component";


@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    MyListComponent
  ]
})
export class AppModule {}
