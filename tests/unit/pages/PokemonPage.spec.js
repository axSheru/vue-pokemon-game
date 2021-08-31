import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from '../Mocks/Pokemons.mock'
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

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

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions.', () => {

        const wrapper = mount( PokemonPage, {
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

        const componentPicture = wrapper.findComponent( PokemonPicture )
        const componentOptions = wrapper.findComponent( PokemonOptions )

        expect( componentPicture.exists() ).toBeTruthy()
        expect( componentOptions.exists() ).toBeTruthy()

        expect( componentPicture.props( 'pokemonId' ) ).toBe( 1 )
        expect( componentOptions.props( 'pokemons' ) ).toBeTruthy()
        
    })
    
    
    
})
