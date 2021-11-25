import { ToDoItem } from "./todoitem";

export class Model{
  name:string;
  items:ToDoItem[];

  constructor(){
    this.name="Enes";
    this.items=[
      {description:"Breakfast",action:true},
      {description:"Gym",action:true},
      {description:"Lecture",action:false},
    ]

  }
}



