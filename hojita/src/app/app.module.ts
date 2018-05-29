import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion5Component } from './seccion5/seccion5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    ContactoComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    Seccion5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
