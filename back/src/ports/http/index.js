import express from "express";

const _app = express();

const persistence = {};

export const app = getRouters(persistence, _app);