class User {
  constructor({ id, name, email }) {
    if (!name) throw new Error("Name is required");
    if (!email) throw new Error("Email is required");

    this.id = id; // Pode ser um ID gerado ou um ID que você define
    this.name = name;
    this.email = email;
  }
}

let users = [];

function addUser(user) {
  users.push(user);
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  User, // Exporta a classe User
  addUser,
  getUserById,
};
