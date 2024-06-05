import { create } from "./user.usecase.js";

describe("Name of the group", () => {
  
  test("should", () => {
    expect(create("james", "alves", "james@jamesalve.som.br").email).toBe("james@jamesalve.som.br");
  });

  test("should 2", () => {
    expect(create("james", "alves", "james@jamesalve.som.br").email).toBe("james@jamesalve.som.br");
  });

});
