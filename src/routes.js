const pokemons = require("./data/pokemons.json");
const { Router } = require("express");

const routes = Router();

routes.get("/pokemon", (req, res) => {
  res.send(pokemons);
});

routes.get("/pokemon/:id", (req, res) => {
  const currentPokemon = pokemons.find(
    (pokemon) => pokemon.id === parseInt(req.params.id)
  );

  if (!currentPokemon) return res.send("Pokemon not found!");

  res.send(currentPokemon);
});

module.exports = routes;
