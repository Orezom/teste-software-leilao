const request = require("supertest");
const app = require("../../src/app.js");

describe("Auction API Integration Tests", () => {
  it("should create a new auction via API", async () => {
    const res = await request(app)
      .post("/api/auctions")
      .send({ item: "Car", startingBid: 1000 });

    expect(res.statusCode).toBe(201);
    expect(res.body.item).toBe("Car");
    expect(res.body.startingBid).toBe(1000);
  });

  it("should return 400 for negative starting bid via API", async () => {
    const res = await request(app)
      .post("/api/auctions")
      .send({ item: "Car", startingBid: -500 });

    expect(res.statusCode).toBe(400);
  });
});
