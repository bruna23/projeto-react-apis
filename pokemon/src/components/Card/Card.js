import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../routes/coordinator";
import { ImgStyle, ContainerCard } from "./Card.styled";
import { Type } from "../types/Type";
import { TypeColor } from "../types/TypeColor";
import { Container } from "@mui/system";

function Card(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

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

  const getTypePokemon = () => {
    for (let i in pokemon.types) {
      return pokemon.types[i].type.name;
    }
  };
  return (
    <ImgStyle>
      <ContainerCard color={TypeColor(getTypePokemon())} className="container">
        <div className="info">
          <p>#0{pokemon.id} </p>
          <h2>{pokemon.name} </h2>
          <img
            src={pokemon.sprites?.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="types">
          {pokemon.types?.map((type) => {
            return <img src={Type(type.type.name)} />;
          })}
        </div>

        <div className="button">
          {location.pathname === "/" ? (
            <button className="cap" onClick={() => addToPokedex(pokemon)}>
              Capturar!{" "}
            </button>
          ) : (
            <button
              className="bntDel"
              onClick={() => removeFromPokedex(pokemon)}
            >
              Excluir
            </button>
          )}

          <p
            className="details"
            onClick={() => goToDetailsPage(navigate, pokemon.name)}
          >
            detalhes
          </p>
        </div>
      </ContainerCard>
    </ImgStyle>
  );
}

export default Card;
