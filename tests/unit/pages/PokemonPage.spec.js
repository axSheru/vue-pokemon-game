import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from '../Mocks/Pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    test('Debe de hacer match con el snapshot', () => {        
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe de llamar mixPokemonArr cuando se monta.', () => {
        
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArr' )
        shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })

    test('Debe de hacer match con el snapshot cuando cargan los Pokémon.', () => {
        
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })
    
    
    

})
