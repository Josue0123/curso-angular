import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { Componentes } from './Componentes';
import { ExternoComponent } from './externo/externo.component';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders } from './app.routing';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
   declarations: [
      //carganloscomponentes\\n
      AppComponent,
      ZapatillasComponent,
      ExternoComponent,
      HomeComponent,
      VideojuegoComponent,
      CursosComponent
   ],
   imports: [
      //cargarmodulosdelpropioframeworkdeangular\\nBrowserModule,
      Componentes,
      routing
   ],
   providers: [appRoutingProviders],
   //cargaservicios  
   bootstrap: [
      AppComponent//componenteprincipalquesevaacargar
   ]
})
export class AppModule { } //exportan el modulo 
