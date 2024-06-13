import userAdapterFactory from "./user.adapter.js";

export const adapter = (dao) => {
  return { user: userAdapterFactory(dao) };
};
