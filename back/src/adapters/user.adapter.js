import { validadeUser } from "../core/users/user.usecase.js";

const userAdapterFactory = (dao, logger) => {
  return {
    create: createUser(dao, logger ),
  }
}

const createUser = (dao, logger) => async (param) => {
  logger.info('a new user as created')
  dao.user.insert(validadeUser(param));
}

export default userAdapterFactory;