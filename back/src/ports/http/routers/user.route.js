import { Router } from "express"
import { UserController } from "../controllers/user.controller.js"

const router = Router();

export const UserRouter = (adapter) => {
    const controler = UserController(adapter);

    router.get('/list', controler.list);
    router.post('/', (req, res, next) => {

    /*  #swagger.parameters['user'] = {
            in: 'body',
            required: true,
            schema: {  
                name:  'John',
                lastname: 'Doe',
                email: 'john.doe@example.com' 
            }
        } 
    */

        
        const u = UserController(adapter).create(req, res, next);
        res.send(u)
    });

    router.get('/:id', (req, res, next) => {
        /* #swagger.parameters['id'] = { description: 'Some description...' } */
        UserController.read(req, res, next);
    });
    return router;
}