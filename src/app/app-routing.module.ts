import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importamos los componentes que creamos
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// 2. Definimos las rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Si entras a la raíz, te manda a home
  { path: '**', redirectTo: '/home' } // Si escribes cualquier otra cosa, te manda a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }