import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import PokemonPage from "./views/PokemonPage/PokemonPage";

function App() {
  const morning = 7;
  const afternoon = 12;
  const evening = 18;
  const night = 22;
  const currentTime = new Date().getHours();

  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=386")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      });
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div
      className={
        currentTime >= morning && currentTime < afternoon
          ? "App morning"
          : currentTime >= afternoon && currentTime < evening
          ? "App afternoon"
          : currentTime >= evening && currentTime < night
          ? "App evening"
          : "App night"
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                pokemons={pokemons}
                filteredPokemons={filteredPokemons}
                setFilteredPokemons={setFilteredPokemons}
              />
            }
          />
          <Route path="/:name" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
