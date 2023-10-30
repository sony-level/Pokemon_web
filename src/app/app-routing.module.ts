import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent}, // path: 'pokemons' => http://localhost:4200/pokemons
  {path: 'pokemons/:id', component: DetailPokemonComponent}, // path: 'pokemons/:id' => http://localhost:
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // path: 'pokemons
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
