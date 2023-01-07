import Card from "../../Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
function HomePage(props) {
  const context = useContext(GlobalContext);

  const { pokelist, addToPokedex, pokedex } = context;
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
        <h1> Todos os pokemons</h1>

        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
