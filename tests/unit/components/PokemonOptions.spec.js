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
});
