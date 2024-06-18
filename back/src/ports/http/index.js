import express from "express";
import { getRouters } from "./routers/index.js";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../../swagger.json" assert { type: "json" };
import {db} from '../db/index.js'
import { logger } from "../logs/config.js";
import { adapter } from "../../adapters/index.js";
import cors from "cors";
const _app = express();

const adp = adapter(db, logger)
/* Middlewares */
_app.use(cors());
_app.use(bodyParser.json());
_app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export const app = getRouters(adp, _app);