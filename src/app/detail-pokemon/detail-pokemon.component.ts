import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { ActivatedRoute , Router } from '@angular/router'; // on est aller chercher le service ActivatedRoute pour l'injecter dans mon composant via mon constructor qui permet de rendre le service route disponible dans mon composant

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon : Pokemon|undefined

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit(){
    this.pokemonList = POKEMONS;

    const pokemonid: string|null = this.route.snapshot.paramMap.get('id');
    console.log(`Vous avez cliqué sur le pokemon, ${pokemonid}`);
    if(pokemonid){
      this.pokemon= this.pokemonList.find(pokemon => pokemon.id == pokemonid);
    }

  }

  goback(){
    this.router.navigate(['/pokemons'])
    window.history.back();

  }

}
