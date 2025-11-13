import express from 'express';
import IsUserLoggedIn from '../util/IsUserLoggedIn.js';
import { Checkout, ConfirmOrder, GetAllOrder } from '../controllers/OrderController.js';

let routes = express.Router();

routes.use("/checkout", IsUserLoggedIn, Checkout);
routes.use("/confirm", IsUserLoggedIn, ConfirmOrder);
routes.use("/all", GetAllOrder);

export default routes;