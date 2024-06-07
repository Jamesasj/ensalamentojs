import { Router } from "express"
import {UserController} from "../controllers/user.controller.js"

const router = Router();

export const UserRouter = (adapter) => {
    const controler = UserController(adapter);
    
    router.get('/list', controler.list );

    return router;
}