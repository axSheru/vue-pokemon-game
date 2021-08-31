import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

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
    
    

})
