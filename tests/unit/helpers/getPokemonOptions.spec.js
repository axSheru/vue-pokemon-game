import { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', () => {

    test('Debe de retornar un arreglo de números.', () => {

        const pokemons = getPokemons()

        expect( pokemons.length ).toBe( 650 )
        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)
        expect( typeof pokemons[649] ).toBe( "number" )
        
    })

    test('Debe de retornar un arreglo de 4 elementos con nombres de Pokémon.', async () => {
        
        const pokemons = await getPokemonNames( [1, 2, 3 , 4] )
        expect( pokemons ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado.', () => {
        
    })
    
})