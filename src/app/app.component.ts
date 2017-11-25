import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  todos:any[] = [];
  todo:string = '';
  filterType = 'All';
  isToggleAll = false;

  constructor(private dataSvc: DataService){

  }

  ngOnInit(){
    //取得資料
    this.dataSvc.getTodos()
      .subscribe(data => {
        this.todos = data;
      });
  }

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
      // this.todos = [...this.todos, newTodo];//...是把陣列展開
      this.dataSvc.addTodo(newTodo)
      .subscribe(data => {
        this.todos = this.todos.concat(data);
        this.todo = '';
        });
    }
  }

  clearCompleted(){
    this.todos
      .filter(item => item.done)
      .forEach(
        item => {
          this.destroy(item);
        }
      );
  }
  filterTypeChange($event){
    this.filterType = $event;
  }
  toggleAllChange(){
    this.todos.forEach(item=> {
      item.done = this.isToggleAll;
      this.updateTodo(item);
    })
  }
  destroy(data){
    this.dataSvc.removeTodo(data)
      .subscribe(item => {
        this.todos = this.todos.filter(item => item.id !== data.id);
      });
  }

  updateTodo(data){
    this.dataSvc.updateTodo(data)
      .subscribe();
  }
}
