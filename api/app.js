const express = require("express");

const app = express();

app.use(express.json());

const Games = require("../games/gamesModel");

app.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

app.get("/games", async (req, res) => {
  try {
    const games = await Games.getGames();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/games", async (req, res) => {
  const game = req.body;
  if (game.title && game.genre && game.releaseYear) {
    try {
      const addedGame = await Games.addGame(game);
      res.status(201).json(addedGame);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(422).json({ message: "please fill out required fields" });
  }
});

module.exports = app;
