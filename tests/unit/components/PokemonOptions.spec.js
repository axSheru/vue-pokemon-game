import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { mockPokemons } from "../Mocks/Pokemons.mock.js";

describe("PokemonOptions Component.", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons
      }
    });
  });

  test("Debe de hacer match con el snapshot.", () => {

    expect(wrapper.html()).toMatchSnapshot()

  });

  test('Debe de mostrar las 4 opciones correctamente.', () => {

    const liTags = wrapper.findAll( 'li' )

    expect( liTags.length ).toBe( 4 )

    expect( liTags[0].text() ).toBe( 'bulbasaur' )
    expect( liTags[1].text() ).toBe( 'ivysaur' )
    expect( liTags[2].text() ).toBe( 'venusaur' )
    expect( liTags[3].text() ).toBe( 'charmander' )
      
  })

  test('Debe de emitir "selection" con sus respectivos parámetros al hacer clic.', () => {
      
  })

});
