import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NameInputComponent } from './components/NameInput/name-input.component';
import { AppHeaderComponent } from './components/AppHeader/app-header.component';
import { PokemonGridComponent } from './components/PokemonGrid/Pokemon-Grid.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TypeColorService } from './services/type-color.service';
import { PokemonCardComponent } from './components/PokemonCard/Pokemon-Card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NameInputComponent,
    PokemonGridComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [TypeColorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
