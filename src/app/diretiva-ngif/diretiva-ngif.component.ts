import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos:string[] = ['Angular 2'];

  mostrarCursos:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  exibirrCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
