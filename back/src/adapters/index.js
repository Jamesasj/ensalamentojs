import UserCase from "./user.adapter.js";

export const adapter = (dao) => {
  return { user: UserCase };
};
