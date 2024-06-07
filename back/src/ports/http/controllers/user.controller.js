
export const UserController = (adapter) =>{
    return {
        list : (req, res, next) =>{
            res.send([{msg:'ola mundo'}]);
        }
    }
}

