import express from "express";
import { getRouters } from "./routers/index.js";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../../swagger.json" assert { type: "json" };
const _app = express();

const persistence = {};
/* Middlewares */
_app.use(bodyParser.json());
_app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export const app = getRouters(persistence, _app);