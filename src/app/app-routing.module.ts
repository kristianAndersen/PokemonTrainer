import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameInputComponent } from './components/NameInput/name-input.component';
import { PokemonGridComponent } from './components/PokemonGrid/Pokemon-Grid.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NameInputComponent,
  },
  {
    path: 'pokemon',
    component: PokemonDetailComponent,
  },
  {
    path: 'grid',
    component: PokemonGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
