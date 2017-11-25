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
  filterType = 'All';

  addTodo(){
    // console.log($event);
    if (this.todo){
      let newTodo = {
        text: this.todo,
        done: false
      };
      // this.todos.push(newTodo);
      //上述用 push 的方法不會觸發 ngOnChange，因為 reference 不會改變
      //way1
      // this.todos = this.todos.concat(newTodo);
      //way2
      this.todos = [...this.todos, newTodo];//...是把陣列展開
      this.todo = '';
    }
  }

  clearCompleted(){
    this.todos = this.todos.filter(item => !item.done);
  }
  filterTypeChange($event){
    this.filterType = $event;
  }
}
