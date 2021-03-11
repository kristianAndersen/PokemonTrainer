import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NameInputComponent} from './components/NameInput/name-input.component'
import { AppHeaderComponent } from './components/AppHeader/app-header.component';
import {PokemonGridComponent} from './components/PokemonGrid/pokemon-grid.component'

@NgModule({
  declarations: [
    AppComponent,    
    AppHeaderComponent,
    NameInputComponent,
    PokemonGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
