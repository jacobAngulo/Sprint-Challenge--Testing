const request = require("supertest");
const app = require("./app.js");
const db = require("../data/dbConfig");

describe("app.js", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(app)
        .get("/")
        .expect(200);
    });
  });
  describe("GET /games", () => {
    it("should return an empty array intially", () => {
      return request(app)
        .get("/games")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.text).toBe("[]");
        });
    });
  });
  describe("POST /games", () => {
    it("should return the added game when seccesful", () => {
      return request(app)
        .post("/games")
        .send({
          title: "test",
          genre: "test",
          releaseYear: 2019
        })
        .then(response => {
          expect(response.status).toBe(201);
          expect(response.text).toBe(
            '{"id":1,"title":"test","genre":"test","releaseYear":2019}'
          );
        });
    });
    it("should respond with 422 BAD REQUEST if all fields arent filled out", () => {
      return request(app)
        .post("/games")
        .send({
          title: "test",
          genre: "",
          releaseYear: 2019
        })
        .then(response => {
          expect(response.status).toBe(422);
        });
    });
  });
});
