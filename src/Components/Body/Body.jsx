import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import LikesContext from "../LikesContext/LikesContext";
import { Link } from "react-router-dom";
import "../../assets/global.css";

function Body({ pokemon }) {
  const { likes, handleLikeClick } = useContext(LikesContext);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {pokemon.map((poke, index) => (
        <Card style={{ width: "12rem" }} key={index} className="m-2">
          <Card.Img variant="top" src={poke.data.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{poke.name}</Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => handleLikeClick(index)}
                className="me-1 btn-secondary"
              >
                {likes[index] ? "😡" : "❤️"}
              </Button>
              <Button className="btn btn-secondary me-1">
                <Link to={`/pokedex/${index}`} className="buttonColors">
                  📃
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Body;
