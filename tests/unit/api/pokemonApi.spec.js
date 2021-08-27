import pokemonApi from "@/api/pokemonApi"

describe('pokemonApi', () => {

    test('debe de verificar que Axios está configurado con el API de Pokémon', () => {
        
        expect( pokemonApi.defaults.baseURL ).toBe( 'https://pokeapi.co/api/v2/pokemon' )

    })
    

})