const User = require("../../src/user.js");

describe("User Model Unit Tests", () => {
  it("should create a new user successfully", () => {
    const userData = { name: "John", email: "john@example.com" };
    const newUser = new User(userData);

    expect(newUser.name).toBe("John");
    expect(newUser.email).toBe("john@example.com");
  });

  it("should throw an error if the email is invalid", () => {
    const userData = { name: "John", email: "invalid-email" };

    expect(() => new User(userData)).toThrow();
  });

  it("should throw an error if the name is missing", () => {
    const userData = { email: "john@example.com" };

    expect(() => new User(userData)).toThrow("Name is required");
  });
});
