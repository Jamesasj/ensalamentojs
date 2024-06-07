import express from "express";
import { getRouters } from "./routers/index.js";
const _app = express();

const persistence = {};

export const app = getRouters(persistence, _app);