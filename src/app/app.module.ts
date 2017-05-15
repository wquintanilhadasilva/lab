import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule, MaterializeAction } from 'angular2-materialize';

import { AppComponent } from './app.component';

import {ViewBootstrapComponent} from './view-bootstrap/view-bootstrap.component';
import { ViewMaterializeComponent } from './view-materialize/view-materialize.component';
import { ViewLodashComponent } from './view-lodash/view-lodash.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewBootstrapComponent,
    ViewMaterializeComponent,
    ViewLodashComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
