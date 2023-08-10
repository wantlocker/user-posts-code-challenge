import BodyParser from "body-parser";
import { Request, Response } from "express";
import Router from "express-promise-router";
import { prisma } from "./prisma";

const router = Router();

router.get("/hello", (_, res) => res.send("Hello World!"));

// TODO: Add your routes here

export default router;
