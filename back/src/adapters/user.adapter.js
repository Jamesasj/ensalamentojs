import { validadeUser } from "../core/users/user.usecase.js";

const userAdapterFactory = (dao) => {
  return {
    create: createUser(dao)
  }
}

const createUser = (dao) => async (param) => {
  dao.user.insert(validadeUser(param));
}

export default userAdapterFactory;