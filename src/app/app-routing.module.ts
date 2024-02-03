import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagesComponent } from './paginas/pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"pages",
    component:PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
