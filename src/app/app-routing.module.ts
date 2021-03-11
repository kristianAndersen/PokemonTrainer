import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameInputComponent } from './components/NameInput/name-input.component';
import {PokemonGridComponent} from './components/PokemonGrid/pokemon-grid.component'
const routes: Routes = [
{
  path:'',
  component: NameInputComponent
},
{
  path:'grid',
  component:PokemonGridComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
