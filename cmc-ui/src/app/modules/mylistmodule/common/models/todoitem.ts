import { randomUUID } from "crypto";


export class ToDoItem
{
  constructor(id : string, desc : string)
  {
    this.itemId = id;
    this.description = desc;
  }

  itemId : string = '';
  description : string = ''
}
