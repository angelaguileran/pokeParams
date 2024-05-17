import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Body from "./Components/Body/Body";
import Favoritos from "./Components/Favoritos/Favoritos";
import { useEffect, useState } from "react";
import FetchData from "./Components/FetchPokeApi/FetchData";
import { LikesProvider } from "./Components/LikesContext/LikesContext";
import PokeParams from "./Components/PokeParams/PokeParams";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(151);

  useEffect(() => {
    FetchData({ setPokemon, limit });
  }, [limit]);

  return (
    <>
      <BrowserRouter>
        <LikesProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Body pokemon={pokemon} />}></Route>
            <Route
              path="/Favoritos"
              element={<Favoritos pokemon={pokemon} />}
            />
            <Route
              path="/pokedex/:id"
              element={<PokeParams pokemon={pokemon} />}
            ></Route>
          </Routes>
        </LikesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
