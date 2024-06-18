import userAdapterFactory from "./user.adapter.js";

export const adapter = (dao, logger) => {
  return { 
    user: userAdapterFactory(dao,logger) ,
    logger: logger
  };
};
