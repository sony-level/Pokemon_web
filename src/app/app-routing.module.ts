import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}, // path: 'pokemons
  {path: 'pokemons', component: ListPokemonComponent}, // path: 'pokemons' => http://localhost:4200/pokemons
  {path: 'pokemons/:id', component: DetailPokemonComponent}, // path: 'pokemons/:id' => http://localhost:
  { path: 'a', redirectTo: 'pokemons'},// path: 'a' => http://localhost:4200/a en cliquant sur mon logo"
  { path: '**', component :  PageNotFoundComponent} // path: 'not-found' => http://localhost:4200/not-found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
