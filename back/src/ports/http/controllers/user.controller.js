
export const UserController = (adapter) => {
    return {
        list: (req, res, next) => {
            res.send([{ msg: 'ola mundo' }]);
        },


        create: (req, res, next) => {
            const u = req.body;
            adapter.user.create(u);
            //u.id = 1;
            return u;
        },

        read: (req, res, next) => {
            res.send({});
        }
    }
}

