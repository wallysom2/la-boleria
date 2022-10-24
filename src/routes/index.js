import express from "express";
import { newCake } from "../controllers/cakesController.js";

const router =  express.Router();

router.post ('/cakes', newCake)

export default router;
