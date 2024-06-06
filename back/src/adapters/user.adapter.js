import { validadeUser } from "../core/users/user.usecase.js";

export const UserCase = {
  create: (param, dao) => {
    dao.save(validadeUser(param));
  },
};
