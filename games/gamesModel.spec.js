const db = require("../data/dbConfig");
const Games = require("./gamesModel");

describe("games model", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  describe("getGames", () => {
    it("should return an empty array initially", async () => {
      const games = await Games.getGames();

      expect(games).toHaveLength(0);
      expect(games).toEqual([]);
    });
  });

  describe("addGames", () => {
    it("should mutate the games array when a game is added", async () => {
      await Games.addGame({
        title: "test",
        genre: "test",
        releaseYear: 2019
      });
      const games = await db("games");

      expect(games).toHaveLength(1);
    });
  });
});
