import { Box, Typography } from "@mui/material";
import Filter from "../Filter/Filter";
import PokemonsList from "../PokemonsList/PokemonsList";

const Main = ({ pokemons, filteredPokemons, setFilteredPokemons }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        Pokédex
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: "0.8rem",
          textAlign: "center",
        }}
      >
        Rechercher un pokémon par nom
      </Typography>

      <Filter
        pokemons={pokemons}
        filteredPokemons={filteredPokemons}
        setFilteredPokemons={setFilteredPokemons}
      />

      <PokemonsList
        pokemons={pokemons}
        filteredPokemons={filteredPokemons}
      />
    </Box>
  );
};

export default Main;
