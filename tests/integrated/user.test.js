const request = require("supertest");
const app = require("../../src/app.js");

describe("User API Integration Tests", () => {
  it("should create a new user via API", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "John", email: "john@example.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("John");
    expect(res.body.email).toBe("john@example.com");
  });

  it("should return 400 for invalid email via API", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "John", email: "invalid-email" });

    expect(res.statusCode).toBe(400);
  });
});
