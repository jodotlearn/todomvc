import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input('masterToDos') todos: any[];
  isTooMore = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.isTooMore = this.todos.length > 5
  }

}
