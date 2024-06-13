import User from '../models/user.model.js';

async function insert(user){
    try {
        return await User.create(user);
    } catch (err) {
        throw err;
    }
}

export default { insert }