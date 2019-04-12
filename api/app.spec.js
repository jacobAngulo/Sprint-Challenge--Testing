const request = require("supertest");
const app = require("./app.js");

describe("app.js", () => {
  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(app)
        .get("/")
        .expect(200);
    });
  });
});
