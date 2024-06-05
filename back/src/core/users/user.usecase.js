import { User } from "./user.model.js";

function create(firtsNme, lastName, email) {
  return new User(firtsNme, lastName, email);
}

export { create };
