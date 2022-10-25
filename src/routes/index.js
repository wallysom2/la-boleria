import express from "express";
import { newCake } from "../controllers/cakesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import cakeSchema from "../schemas/cakeSchema.js";

const router =  express.Router();

router.post ('/cakes', validateSchema(cakeSchema), newCake);

export default router;
