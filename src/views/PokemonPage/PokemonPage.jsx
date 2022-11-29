import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackgroundLogo from "../../assets/images/logo.png";

const PokemonPage = () => {
  const location = useLocation();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "60%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row-reverse",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          width: "100%",
          height: "50%",
          position: "relative",
          padding: "2rem 1rem",
          overflow: "hidden",
          backgroundColor:
            location.state.pokemonType === "water"
              ? "#76BDFE"
              : location.state.pokemonType === "fire"
              ? "#FB6C6C"
              : location.state.pokemonType === "grass"
              ? "#48D0B0"
              : location.state.pokemonType === "electric"
              ? "#FFD86F"
              : location.state.pokemonType === "normal"
              ? "#E3E3E3"
              : location.state.pokemonType === "ground"
              ? "#d9bb64"
              : location.state.pokemonType === "rock"
              ? "#b0984e"
              : location.state.pokemonType === "ice"
              ? "#7fdaf7"
              : location.state.pokemonType === "bug"
              ? "#adb61f"
              : location.state.pokemonType === "dragon"
              ? "#434AFF"
              : location.state.pokemonType === "poison"
              ? "#A74EFF"
              : location.state.pokemonType === "fairy"
              ? "#F3A8FF"
              : location.state.pokemonType === "psychic"
              ? "#EB6FFF"
              : location.state.pokemonType === "fighting"
              ? "#D17100"
              : location.state.pokemonType === "ghost"
              ? "#6162b5"
              : location.state.pokemonType === "dark"
              ? "#544133"
              : location.state.pokemonType === "steel"
              ? "#bfbfcb"
              : location.state.pokemonType === "flying"
              ? "#9fb3f3"
              : "black",
        }}
      >
        <Box
          component="img"
          src={location.state.pokemonImage}
          sx={{ width: "30%", zIndex: "2"}}
        />
        <Box>
          <Typography
            sx={{ fontSize: "3rem", fontWeight: "bold", zIndex: "2" }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        </Box>
        <Box
          component="img"
          src={BackgroundLogo}
          sx={{
            width: "40%",
            position: "absolute",
            transform: "rotate(-45deg)",
            bottom: "-100px",
            right: "-100px",
            opacity: "0.2",
            zIndex: "1",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          height: "50%",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        test
      </Box>
    </Box>
  );
};

export default PokemonPage;
