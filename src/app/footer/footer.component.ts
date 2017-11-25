import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _todos = [];
  isTooMore = false;
  @Output() onClearCompleted = new EventEmitter();

  filterType = 'All';
  @Output() filterTypeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeFilterType(filterType){
    this.filterType = filterType;
    this.filterTypeEvent.emit(this.filterType);
  }

  clearCompleted(){
    this.onClearCompleted.emit();
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
