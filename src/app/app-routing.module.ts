import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonGridComponent } from './components/PokemonGrid/Pokemon-Grid.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OnlyLoggedInUsersGuard } from './OnlyLoggedInUsersGuard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'pokemon/:id',
    canActivate: [OnlyLoggedInUsersGuard],
    component: PokemonDetailComponent,
  },
  {
    path: 'pokemon',
    canActivate: [OnlyLoggedInUsersGuard],
    component: PokemonGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
