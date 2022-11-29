import { Box } from "@mui/material";
import PokemonItem from "./PokemonItem/PokemonItem";

const PokemonsList = ({ filteredPokemons }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2   , 1fr)",
        gridGap: "1rem",
        width: "50%",
        margin: "0 auto",
      }}
    >
      {filteredPokemons.length > 0
        ? filteredPokemons.map((pokemon) => {
            return <PokemonItem pokemon={pokemon} key={pokemon.name} />;
          })
        : "Aucun pokémon ne correspond à votre recherche"}
    </Box>
  );
};

export default PokemonsList;
