import { Component, OnInit, EventEmitter } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-view-materialize',
  templateUrl: './view-materialize.component.html',
  styleUrls: ['./view-materialize.component.css']
})
export class ViewMaterializeComponent implements OnInit {

  msgBootstrap: string = '';

  constructor() { }

  ngOnInit() {
  }

  selectOptions = [{value:'Hum', name:'Elemento 1'},{name:'Elemento 2', value: 'Dois'}];

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
