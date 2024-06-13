import sequelize from "./db.config.js";
import User from "./models/user.model.js";


User.sync();