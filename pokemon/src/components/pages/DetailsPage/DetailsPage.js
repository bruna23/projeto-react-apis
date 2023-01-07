import axios from "axios";
import React, { useState, useContext } from "react";
import Header from "../../header/Header";
import { useParams } from "react-router-dom";
import { BaseStats, Container, Div, Info, Primeiro, Details } from "./Styled";
import { TypeColor } from "../../types/TypeColor";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Type } from "../../types/Type";

const DetailsPage = () => {
  const { name } = useParams();
  const [detailedPokemonData, setDetailedPokemonData] = useState({});
  const context = useContext(GlobalContext);
  const { pokelist } = context;

  let pokemonToBeDetailed = pokelist.find(
    (pokemon) => pokemon["name"] === name
  );

  const fetchDetailedPokemon = async () => {
    try {
      const response = await axios.get(pokemonToBeDetailed.url);
      setDetailedPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (pokemonToBeDetailed) {
    fetchDetailedPokemon();
  }
  const getTypePokemon = () => {
    for (let i in detailedPokemonData.types) {
      return detailedPokemonData.types[i].type.name;
    }
  };

  return (
    <div>
      <Header />
      <Primeiro>
        <h1>Detalhes</h1>

        <Container color={TypeColor(getTypePokemon())}>
          <div className="infos">
            <Info>
              <img src={detailedPokemonData?.sprites?.front_default} />
              <img src={detailedPokemonData?.sprites?.back_default} />
            </Info>
            <BaseStats className="baseStats">
              <h2>Base stats</h2>
              {detailedPokemonData?.stats?.map((stats) => {
                return <p>{stats.stat.name}</p>;
              })}
              {detailedPokemonData?.stats?.map((stats) => {
                return <p>{stats.base_stat}</p>;
              })}
            </BaseStats>
          </div>
          <Div>
            {" "}
            <img
              className="imagem"
              src={
                detailedPokemonData?.sprites?.other.dream_world.front_default
              }
            />
            <Details>
              <h2>#{detailedPokemonData?.id}</h2>
              <h4>{detailedPokemonData?.name}</h4>
              <div className="types">
                <p>
                  {detailedPokemonData?.types?.map((type) => {
                    return <img className="type" src={Type(type.type.name)} />;
                  })}
                </p>
              </div>
            </Details>
          </Div>
        </Container>
      </Primeiro>
    </div>
  );
};
export default DetailsPage;
