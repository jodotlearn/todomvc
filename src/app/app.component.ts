import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { HttpClient } from '@angular/common/http';

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
  apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    //取得資料
    this.http.get<any[]>(this.apiUrl)
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
      this.http.post(this.apiUrl, newTodo)
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
    this.http.delete(`${this.apiUrl}/${data.id}`)
      .subscribe(item => {
        this.todos = this.todos.filter(item => item.id !== data.id);
      });
  }

  updateTodo(data){
    this.http.put(`${this.apiUrl}/${data.id}`,data)
      .subscribe();
  }
}
