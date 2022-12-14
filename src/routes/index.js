import express from "express";

import { newCake } from "../controllers/cakesController.js";
import { newClient } from "../controllers/clientsController.js";
import orderController from "../controllers/ordersController.js";

import { validateSchema } from "../middlewares/schemaValidator.js";

import cakeSchema from "../schemas/cakeSchema.js";
import clientSchema from "../schemas/clientsSchema.js"
import orderSchema from "../schemas/ordersSchema.js";

const router =  express.Router();

router.post ('/cakes', validateSchema(cakeSchema), newCake);
router.post ('/clients', validateSchema(clientSchema), newClient);
router.post ('/order', validateSchema(orderSchema), orderController.newOrder);

router.get ('/orders', orderController.showOrders);
router.get ('/orders/:id', orderController.showOrderById);

export default router;