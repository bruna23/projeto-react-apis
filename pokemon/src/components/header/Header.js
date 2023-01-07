import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../routes/coordinator";
import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./Header.styled";
import image from "../icons/image.svg";

function Header(props) {
  const { pokemonUrl, removeFromPokedex } = props;

  const location = useLocation();

  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <div className="home">
              <button onClick={() => goToPokedexPage(navigate)}>
                Ver pokedex
              </button>
              <img src={image} />
            </div>
          </>
        );
      case "/pokedex":
        return (
          <>
            <div className="pokedex">
              <h3 onClick={() => goToHomePage(navigate)}>
                <strong> Todos pokemons </strong>
              </h3>
              <img src={image} />
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="details">
              <h3 onClick={() => goToHomePage(navigate)}>
                <strong> Todos pokemons </strong>
              </h3>

              <img src={image} />
              <button
                className="bntDel"
                onClick={() => removeFromPokedex(props.pokemon)}
              >
                Excluir da Pokedex
              </button>
            </div>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
