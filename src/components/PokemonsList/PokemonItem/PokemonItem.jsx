import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLogo from "../../../assets/images/logo.png";

const PokemonItem = ({ pokemon }) => {
  const navigate = useNavigate();
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonType, setPokemonType] = useState("");

  const pokemonCardStyle = {
    height: '200px',
    position: "relative",
    borderRadius: "10px",
    padding: "2rem 1rem",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    zIndex: "3",
    "&:hover": {
      transform: "scale(1.02)",
    },
    backgroundColor:
      pokemonType === "water"
        ? "#76BDFE"
        : pokemonType === "fire"
        ? "#FB6C6C"
        : pokemonType === "grass"
        ? "#48D0B0"
        : pokemonType === "electric"
        ? "#FFD86F"
        : pokemonType === "normal"
        ? "#E3E3E3"
        : pokemonType === "ground"
        ? "#d9bb64"
        : pokemonType === "rock"
        ? "#b0984e"
        : pokemonType === "ice"
        ? "#7fdaf7"
        : pokemonType === "bug"
        ? "#adb61f"
        : pokemonType === "dragon"
        ? "#434AFF"
        : pokemonType === "poison"
        ? "#A74EFF"
        : pokemonType === "fairy"
        ? "#F3A8FF"
        : pokemonType === "psychic"
        ? "#EB6FFF"
        : pokemonType === "fighting"
        ? "#D17100"
        : pokemonType === "ghost"
        ? "#6162b5"
        : pokemonType === "dark"
        ? "#544133"
        : pokemonType === "steel"
        ? "#bfbfcb"
        : pokemonType === "flying"
        ? "#9fb3f3"
        : "black",
  }

  const pokemonInfosStyle = {
    position: "relative",
    fontWeight: "bold",
    padding: "5px 20px",
    width: "fit-content",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      backgroundColor: "white",
      borderRadius: "50px",
      opacity: "0.2",
    },
  };
  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonImage(data.sprites.other.dream_world.front_default);
        setPokemonType(data.types[0].type.name);
      });
  }, [pokemon.url]);
  return (
    <Box
      sx={pokemonCardStyle}
      onClick={() => navigate(`/${pokemon.name}`, {
        state: {
          pokemonImage,
          pokemonType,
        },
      })}
    >
      <Box
        component="img"
        src={pokemonImage}
        sx={{ width: "30%", zIndex: "2" }}
      />
      <Box
        component="img"
        src={BackgroundLogo}
        sx={{
          width: "40%",
          position: "absolute",
          transform: "rotate(-45deg)",
          bottom: "-30px",
          right: "-30px",
          opacity: "0.2",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={pokemonInfosStyle}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
        <Typography sx={pokemonInfosStyle}>
          {pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}
        </Typography>
      </Box>
    </Box>
  );
};

export default PokemonItem;
