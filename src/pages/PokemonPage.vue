<template>
  <h1>¿Quién es este Pokémon?</h1>
  <PokemonPicture :pokemonId=4 :showPokemon="false" />
  <PokemonOptions :pokemons="pokemonArr" />
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
        pokemonArr: []
      }
    },
    methods: {
      async mixPokemonArr() {
        this.pokemonArr = await getPokemonOptions()
      }
    },
    mounted() {
      this.mixPokemonArr()
    }

}
</script>