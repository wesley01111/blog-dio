import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ComtentComponent } from './paginas/content/comtent.component';

const routes: Routes = [
//voce cria aqui o path para ter multi-rotas, tipo clicar em componnnentes e abrir outro componente
{
  path:'',
  component:HomeComponent
},
{
  path:'comtent',
  component:ComtentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
