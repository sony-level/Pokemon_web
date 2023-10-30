import { Component , OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

ngOnInit() {
  console.table(this.pokemonList);

  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokemon, ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Pokemon non trouvé`);
      this.pokemonSelected = undefined;
    }
  }
}

