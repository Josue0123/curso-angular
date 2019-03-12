import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';  

@NgModule({
  //cargan los componentes
  declarations: [
    AppComponent, 
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  // cargar modulos del propio framework de angular
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NoopAnimationsModule
    
  ],
  providers: [], //carga servicios
  bootstrap: [AppComponent] // componente principal que se va a cargar
})
export class AppModule { } //exportan el modulo 
