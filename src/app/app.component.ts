import { Component } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos:any[] = [];
  todo:string = '';

  addTodo(){
    // console.log($event);
    if (this.todo){
      let newTodo = {
        text: this.todo,
        done: false
      };
      this.todos.push(newTodo);
      this.todo = '';
    }
  }
}
