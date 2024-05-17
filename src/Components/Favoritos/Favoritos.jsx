import { useContext } from "react";
import LikesContext from "../LikesContext/LikesContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/global.css";

function Favoritos({ pokemon }) {
  const { likes } = useContext(LikesContext);
  const favoritos = pokemon.filter((_, index) => likes[index]);

  return (
    <div className="d-flex justify-content-center m-2">
      {favoritos.map((poke, index) => (
        <Card style={{ width: "12rem" }} key={index} className="m-2">
          <Card.Img variant="top" src={poke.data.sprites.front_default} />
          <Card.Body>
            <Card.Title>{poke.name}</Card.Title>
          </Card.Body>
          <Button className="btn btn-secondary">
            <Link to={`/poke/${index}`} className="buttonColors">
              📃
            </Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Favoritos;
