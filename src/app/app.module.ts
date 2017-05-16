import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdSidenavModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MaterializeModule, MaterializeAction } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MaterialDesignComponent } from './material-design/material-design.component';

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
    DiretivaNgifComponent,
    MaterialDesignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
