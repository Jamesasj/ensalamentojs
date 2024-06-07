
import {UserRouter} from './user.route.js';

export const getRouters = (adapter, app) =>{
    app.use('/api/v1/user',  UserRouter(adapter) )
    return app;
}