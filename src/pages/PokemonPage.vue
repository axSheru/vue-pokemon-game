<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture
      :pokemonId=pokemon.id
      :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @selection="checkAnswer" />
  </div>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {

    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
      }
    },
    methods: {
      async mixPokemonArr() {
        this.pokemonArr = await getPokemonOptions()

        const rndInt = Math.floor( Math.random() * 4 )

        this.pokemon = this.pokemonArr[ rndInt ]
      },
      checkAnswer( pokemonId ) {
        this.showPokemon = pokemonId == this.pokemon.id ? true : false
      }
    },
    mounted() {
      this.mixPokemonArr()
    }

}
</script>