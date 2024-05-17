import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "../../assets/global.css";

const PokeParams = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const index = parseInt(params.id);
    const selectedPokemon = pokemon[index];
    setPokemonData(selectedPokemon);
  }, [params.id, pokemon]);

  if (!pokemonData) {
    return <div>Cargando</div>;
  }

  return (
    <div className="d-flex justify-content-center m-5">
      <Card style={{ width: "30rem" }}>
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={pokemonData.data.sprites.front_default}
            alt={pokemonData.name}
            style={{ width: "11rem", textAlign: "center" }}
          />
          <Card.Img
            variant="top"
            src={pokemonData.data.sprites.front_shiny}
            alt={pokemonData.name}
            style={{ width: "11rem", textAlign: "center" }}
          />
        </div>

        <Card.Body>
          <Card.Title>
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1)}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Numero en la PokeDex: {pokemonData.data.order}
          </ListGroup.Item>
          <ListGroup.Item>Peso: {pokemonData.data.weight}gr</ListGroup.Item>
          <ListGroup.Item>
            Experiencia Base: {pokemonData.data.base_experience}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PokeParams;
