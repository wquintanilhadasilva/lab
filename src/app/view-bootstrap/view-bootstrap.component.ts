import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-bootstrap',
  templateUrl: './view-bootstrap.component.html',
  styleUrls: ['./view-bootstrap.component.css']
})
export class ViewBootstrapComponent implements OnInit {

  @Input()
  msgBootstrap: string = '';

  @Input() stsNome:string;

  constructor() { }

  ngOnInit() {
  }

  bootstrap(){
    this.msgBootstrap = 'Clicou no botão!';
  }

}
