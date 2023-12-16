import {Component, Inject, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy, EventEmitter,
  Input, OnInit, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToDoItem } from '../../common/models/todoitem';


@Component({
  selector: 'additem-component',
  templateUrl: './additem.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AddItemComponent implements OnDestroy {

  //form: FormGroup;

  @Output() submitted = new EventEmitter<ToDoItem>();
  constructor(
  ){

  }

  ngOnInit()
  {

  }

  public submit()
  {
    //let text = this.form.getRawValue();
    //this.submitted.emit(this.form.getRawValue());
    //console.log(text)
    // this.form.reset();
  }

  public ngOnDestroy()
  {
    //remove listener
    //this.unsubscribe();
  }
}
