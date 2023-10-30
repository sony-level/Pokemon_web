import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  
    }
  
    selectPokemon(pokemonId: String) {
      const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == pokemonId);
  
      if (pokemon) {
        console.log(`Vous avez cliqué sur le pokemon, ${pokemon.name}`);
        this.pokemonSelected = pokemon;
      } else {
        console.log(`Pokemon non trouvé`);
        this.pokemonSelected = undefined;
      }
    }

constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
  this.router.navigate(['/pokemons', pokemon.id]);
}


}


