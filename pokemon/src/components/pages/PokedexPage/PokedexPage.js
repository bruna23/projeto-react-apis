import Card from "../../Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { removeFromPokedex, pokedex } = context;

  return (
    <Container>
      <Header />
      <section>
        <h1> Meus pokemóns</h1>

        <div className="cards">
          {pokedex.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default PokedexPage;
