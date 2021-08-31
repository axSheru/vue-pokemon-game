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

        //Solución propia.

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

        //Solución profe.

        const wrapper2 = shallowMount( PokemonPage, {
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

        const picture = wrapper2.find( 'pokemon-picture-stub' )
        const options = wrapper2.find( 'pokemon-options-stub' )

        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        expect( picture.attributes( 'pokemonid' ) ).toBe( '1' )
        expect( options.attributes( 'pokemons' ) ).toBeTruthy()
        
    })
    
    test('Debe comprobar el método checkAnswer.', async () => {
        
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

        //Se ejecuta directamente la función del componente.
        await wrapper.vm.checkAnswer( 1 )
        
        expect( wrapper.find( 'h2' ).exists() ).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.find( 'h2' ).text() ).toBe(`Respuesta correcta, ¡es ${mockPokemons[0].name}!`)
        
        await wrapper.vm.checkAnswer( 10 )
        expect( wrapper.vm.message ).toBe('Sigue intentando.')


    })
    
})
