import { create, validadeUser } from "./user.usecase.js";

describe("Name of the group", () => {

  test("should", () => {
    const user = validadeUser({ nome: "james", sobrenome: "alves", email: "james@jamesalve.som.br" });
    expect(validadeUser(user).email).toBe("james@jamesalve.som.br");
  });

  test("should 2", () => {
    const user = validadeUser({ nome: "james", sobrenome: "alves", email: "james@jamesalve.som.br" });
    expect(validadeUser(user).email).toBe("james@jamesalve.som.br");
  });

});
