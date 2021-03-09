import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NameInputComponent} from './components/NameInput/name-input.component'
import { AppHeaderComponent } from './components/AppHeader/app-header.component';

@NgModule({
  declarations: [
    AppComponent,    
    AppHeaderComponent,
    NameInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
