import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './componente/titulo/titulo.component';
import { BigCardComponent } from './componente/big-card/big-card.component';
import { HomeComponent } from './paginas/home/home.component';
import { SmalCardComponent } from './componente/smal-card/smal-card.component';
import { MenuComponent } from './componente/menu/menu.component';
import { PagesComponent } from './paginas/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BigCardComponent,
    HomeComponent,
    SmalCardComponent,
    MenuComponent,
    PagesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    provideClientHydration()
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
