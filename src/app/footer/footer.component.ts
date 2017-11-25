import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _todos = [];
  isTooMore = false;

  constructor() { }

  ngOnInit() {
  }

  @Input('masterToDos')
  set todos(value){
    this._todos = value;
    this.isTooMore = this._todos.length > 5;
  }
  get todos() {
    return this._todos;
  }
}
