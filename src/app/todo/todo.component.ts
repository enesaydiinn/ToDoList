import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Model } from './model';
import { ToDoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  displayAll:boolean=false;
  inputText:string="";

  constructor() {
    this.model.items=this.getItemsFromLS();
   }

   message="";


  //  addItem(txtItem:any){
  //    console.log(txtItem.value);
  //  }

  addItem(value:string){
    if(value!=""){
      let data={description:value,action:false}
      this.model.items.push(data);
      let items=this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items",JSON.stringify(items));
    }
    else
    alert("Please add information!");

  }

   model=new Model();

   onActionChanged(item:ToDoItem)
   {
     let items=this.getItemsFromLS();
     localStorage.clear();
     items.forEach(i=>{
       if(i.description==item.description){
         i.action=item.action;
       }
     })
     localStorage.setItem("items",JSON.stringify(items));
   }

   getItemsFromLS(){

    let items:ToDoItem[]=[];
    let value=localStorage.getItem("items");
    if(value!=null)
    {
      items=JSON.parse(value);
    }
    return items;

   }

   getItems(){
     if(this.displayAll){
      return this.model.items;
     }
     else
     return this.model.items.filter(item=>item.action==false);

   }

   getName(){
    return this.model.name;
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }




  //  private name:string="Enes";
  //  items=["breakfast","gym","lecture","homework"];

  // items:ToDoItem[] = [
    // {description:"Breakfast",action:"Yes"},
    // {description:"Gym",action:"Yes"},
    // {description:"Lecture",action:"No"},
  // ];

  // items:ToDoItem[]=[
  //   new ToDoItem("Breakfast","Yes"),
  //   new ToDoItem("Gym","Yes"),
  //   new ToDoItem("Lecture","No"),

  // ]





}
