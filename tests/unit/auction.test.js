const Auction = require("../../src/auction.js");

describe("Auction Model Unit Tests", () => {
  it("should create a new auction successfully", () => {
    const auctionData = { item: "Car", startingBid: 1000 };
    const newAuction = new Auction(auctionData);

    expect(newAuction.item).toBe("Car");
    expect(newAuction.startingBid).toBe(1000);
  });

  it("should throw an error if the starting bid is negative", () => {
    const auctionData = { item: "Car", startingBid: -500 };

    expect(() => new Auction(auctionData)).toThrow();
  });

  it("should throw an error if the item is missing", () => {
    const auctionData = { startingBid: 1000 };

    expect(() => new Auction(auctionData)).toThrow("Item is required");
  });
});
