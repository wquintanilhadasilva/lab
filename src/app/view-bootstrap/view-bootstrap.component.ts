import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bootstrap',
  templateUrl: './view-bootstrap.component.html',
  styleUrls: ['./view-bootstrap.component.css']
})
export class ViewBootstrapComponent implements OnInit {

  msgBootstrap: string = '';

  constructor() { }

  ngOnInit() {
  }

  bootstrap(){
    this.msgBootstrap = 'Clicou no botão!';
  }

}
