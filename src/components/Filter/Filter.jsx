import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";

const Filter = ({ pokemons, filteredPokemons, setFilteredPokemons }) => {
  const pokemonsFilter = pokemons.map((pokemon) => {
    return {
      id: pokemons.indexOf(pokemon) + 1,
      label: pokemon.name,
    };
  });

  const handleChange = (e) => {
    const filteredPokemonsByName = pokemons.filter((pokemon) => {
      return pokemon.name.includes(e.target.value);
    });
    setFilteredPokemons(filteredPokemonsByName);
  };


  return (
    <Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={pokemonsFilter}
        sx={{
          backgroundColor: "#fff",
          width: "50%",
          borderRadius: "10px",
          margin: "1rem auto 3rem auto",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Rechercher un Pokémon"
            onSelect={handleChange}
          />
        )}
      />

      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Type"
        onChange={handleSelect}
        defaultValue={"Tous"}
        sx={{
          backgroundColor: "#fff",
          width: "50%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          margin: "3rem auto",
        }}
      >
        <MenuItem value="all">Tous</MenuItem>
        <MenuItem value="water">Eau</MenuItem>
        <MenuItem value="fire">Feu</MenuItem>
        <MenuItem value="grass">Plante</MenuItem>
        <MenuItem value="electric">Electrique</MenuItem>
        <MenuItem value="bug">Insecte</MenuItem>
        <MenuItem value="poison">Poison</MenuItem>
        <MenuItem value="flying">Vol</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="rock">Roche</MenuItem>
        <MenuItem value="ground">Sol</MenuItem>
        <MenuItem value="steel">Acier</MenuItem>
        <MenuItem value="fighting">Combat</MenuItem>
        <MenuItem value="fairy">Fée</MenuItem>
        <MenuItem value="dragon">Dragon</MenuItem>
        <MenuItem value="ice">Glace</MenuItem>
        <MenuItem value="psychic">Psy</MenuItem>
        <MenuItem value="ghost">Spectre</MenuItem>
        <MenuItem value="dark">Ténèbre</MenuItem>
      </Select> */}
    </Box>
  );
};

export default Filter;
