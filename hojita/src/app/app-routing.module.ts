import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },

  {
    path: 'contacto',
    component: ContactoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
