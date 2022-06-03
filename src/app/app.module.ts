import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ProyectosComponent,
    SobreMiComponent,
    ConocimientosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
