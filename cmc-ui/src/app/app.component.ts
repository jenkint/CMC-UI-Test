import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyListComponent } from './modules/mylistmodule/components/mylist/mylist.component';
import { AddItemComponent } from './modules/mylistmodule/components/additem/additem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyListComponent, AddItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cmc-ui';
}
